package models.appuser;

import models.DatabaseExecutionContext;
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
public class JPAAppUserRepository implements AppUserRepository {

    private final JPAApi jpaApi;
    private final DatabaseExecutionContext executionContext;

    @Inject
    public JPAAppUserRepository(JPAApi jpaApi, DatabaseExecutionContext executionContext) {
        this.jpaApi = jpaApi;
        this.executionContext = executionContext;
    }

    @Override
    public CompletionStage<AppUser> add(AppUser appUser) {
        return supplyAsync(() -> wrap(em -> insert(em, appUser)), executionContext);
    }

    @Override
    public CompletionStage<Stream<AppUser>> list() {
        return supplyAsync(() -> wrap(em -> list(em)), executionContext);
    }

    private <T> T wrap(Function<EntityManager, T> function) {
        return jpaApi.withTransaction(function);
    }

    private AppUser insert(EntityManager em, AppUser appUser) {
        em.persist(appUser);
        return appUser;
    }

    private Stream<AppUser> list(EntityManager em) {
        String qlString = "select * from app_user;";
        List<AppUser> appUsers = em.createQuery(qlString, AppUser.class).getResultList();
        return appUsers.stream();

        /*
        return jpaApi.withTransaction(entityManager -> {
            Query query = entityManager.createNativeQuery("select max(age) from people");
            return (Long) query.getSingleResult();
        });
         */
    }
}
