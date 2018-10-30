package models.friendship;

import models.DatabaseExecutionContext;
import models.appuser.AppUser;
import play.db.jpa.JPAApi;

import javax.inject.Inject;
import javax.persistence.EntityManager;
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
    public CompletionStage<Friendship> add(Friendship friendship) {
        return supplyAsync(() -> wrap(em -> insert(em, friendship)), executionContext);
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

    private Stream<Friendship> list(EntityManager em) {
        String qlString = "select * from friendship;";
        List<Friendship> friendships = em.createQuery(qlString, Friendship.class).getResultList();
        return friendships.stream();
    }
}
