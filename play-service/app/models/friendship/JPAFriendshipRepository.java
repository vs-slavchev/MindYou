package models.friendship;

import models.DatabaseExecutionContext;
import models.activityblueprint.ActivityBlueprint;
import models.appuser.AppUser;
import models.trackedactivity.TrackedActivity;
import play.db.jpa.JPAApi;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.sql.Timestamp;
import java.util.List;
import java.util.concurrent.CompletionStage;
import java.util.function.Function;
import java.util.stream.Stream;

import static java.util.concurrent.CompletableFuture.supplyAsync;

/**
 * Provide JPA operations running inside of a thread pool sized to the connection pool
 */
public class JPAFriendshipRepository implements FriendshipRepository {

    private final JPAApi jpaApi;
    private final DatabaseExecutionContext executionContext;

    @Inject
    public JPAFriendshipRepository(JPAApi jpaApi, DatabaseExecutionContext executionContext) {
        this.jpaApi = jpaApi;
        this.executionContext = executionContext;
    }

    @Override
    public CompletionStage<Friendship> addFromDTO(FriendshipRequestDTO friendshipRequestDTO) {
        return supplyAsync(() -> wrap(em -> {

            AppUser inviter = em.find(AppUser.class, friendshipRequestDTO.getInviter_id());

            AppUser invitee = em.find(AppUser.class, friendshipRequestDTO.getInvitee_id());

            Friendship friendship = new Friendship(inviter, invitee);

            return insert(em, friendship);
        }), executionContext);
    }

    @Override
    public CompletionStage<Friendship> acceptRequest(String inviterId, String inviteeId) {
        return supplyAsync(() -> wrap(em -> {

            String sqlString = "select * " +
                    "from friendship " +
                    "where inviter_user_id = '" + inviterId +
                    "' and invitee_user_id = '" + inviteeId + "'";

            Query query = em.createNativeQuery(sqlString, Friendship.class);
            Object singleResult = query.getSingleResult();
            Friendship friendship = (Friendship) singleResult;
            friendship.setAccepted(true);
            return friendship;
        }), executionContext);
    }

    @Override
    public CompletionStage<Stream<Friendship>> getAllFriendRequests(String userId) {
        return supplyAsync(() -> wrap(em -> friendRequestList(em, userId)), executionContext);
    }

    private Stream<Friendship> friendRequestList(EntityManager em, String userId) {
        String sqlString = "select *" +
                " from friendship" +
                " where (inviter_user_id = '" + userId +
                "' or invitee_user_id = '" + userId + "')" +
                " and accepted is not true";
        List<Friendship> friendRequestList = em.createNativeQuery(sqlString, Friendship.class).getResultList();
        return friendRequestList.stream();
    };

    @Override
    public CompletionStage<Stream<Friendship>> list() {
        return supplyAsync(() -> wrap(em -> list(em)), executionContext);
    }

    private <T> T wrap(Function<EntityManager, T> function) {
        return jpaApi.withTransaction(function);
    }

    private Friendship insert(EntityManager em, Friendship friendship) {
        em.persist(friendship);
        return friendship;
    }

    private Stream<Friendship> list(EntityManager em) {
        String qlString = "select * from friendship;";
        List<Friendship> friendships = em.createQuery(qlString, Friendship.class).getResultList();
        return friendships.stream();
    }
}
