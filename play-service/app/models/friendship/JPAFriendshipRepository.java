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
    public CompletionStage<Friendship> createFriendRequest(String invitee_id, String inviter_id) {
        return supplyAsync(() -> wrap(em -> {
            Friendship friendship = null;
            String sqlString = "select *" +
                    " from friendship" +
                    " where (inviter_user_id = '" + inviter_id +
                    "' and invitee_user_id = '" + invitee_id + "')" +
                    " or (inviter_user_id = '" + invitee_id +
                    "' and invitee_user_id = '" + inviter_id + "')";

            List<Friendship> friendRequestList = em.createNativeQuery(sqlString, Friendship.class).getResultList();
            if (friendRequestList.isEmpty()){
                if (!inviter_id.equals(invitee_id)){
                    AppUser inviter = em.find(AppUser.class, inviter_id);
                    AppUser invitee = em.find(AppUser.class, invitee_id);
                    friendship = new Friendship(inviter, invitee);
                }
            }
            return insert(em, friendship);
        }), executionContext);
    }

    @Override
    public CompletionStage<Friendship> acceptRequest(String friendshipId, String inviteeId) {
        return supplyAsync(() -> wrap(em -> {

            String sqlString = "select *" +
                    " from friendship" +
                    " where friendship_id = '" + friendshipId +
                    "' and invitee_user_id = '" + inviteeId + "'";

            Query query = em.createNativeQuery(sqlString, Friendship.class);
            Object singleResult = query.getSingleResult();
            Friendship friendship = (Friendship) singleResult;
            friendship.setAccepted(true);
            return friendship;
        }), executionContext);
    }

    @Override
    public CompletionStage<Friendship> declineRequest(String friendshipId, String inviteeId) {
        return supplyAsync(() -> wrap(em -> {

            String sqlString = "select *" +
                    " from friendship" +
                    " where friendship_id = '" + friendshipId +
                    "' and invitee_user_id = '" + inviteeId + "'";

            Query query = em.createNativeQuery(sqlString, Friendship.class);
            Object singleResult = query.getSingleResult();
            Friendship friendship = (Friendship) singleResult;
            return remove(em, friendship);
        }), executionContext);
    }


    @Override
    public CompletionStage<Stream<Friendship>> getReceivedFriendRequests(String userId) {
        return supplyAsync(() -> wrap(em -> receivedFriendRequestList(em, userId)), executionContext);
    }

    @Override
    public CompletionStage<Stream<Friendship>> getSentFriendRequests(String userId) {
        return supplyAsync(() -> wrap(em -> sentFriendRequestList(em, userId)), executionContext);
    }

    private Stream<Friendship> receivedFriendRequestList(EntityManager em, String userId) {
        String sqlString = "select *" +
                " from friendship" +
                " where invitee_user_id = '" + userId + "'" +
                " and accepted is not true";
        List<Friendship> friendRequestList = em.createNativeQuery(sqlString, Friendship.class).getResultList();
        return friendRequestList.stream();
    }

    private Stream<Friendship> sentFriendRequestList(EntityManager em, String userId) {
        String sqlString = "select *" +
                " from friendship" +
                " where inviter_user_id = '" + userId + "'" +
                " and accepted is not true";
        List<Friendship> friendRequestList = em.createNativeQuery(sqlString, Friendship.class).getResultList();
        return friendRequestList.stream();
    }

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

    private Friendship remove(EntityManager em, Friendship friendship){
        em.remove(friendship);
        return friendship;
    }

    private Stream<Friendship> list(EntityManager em) {
        String qlString = "select * from friendship";
        List<Friendship> friendships = em.createQuery(qlString, Friendship.class).getResultList();
        return friendships.stream();
    }
}
