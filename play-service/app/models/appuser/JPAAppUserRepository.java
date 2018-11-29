package models.appuser;

import models.DatabaseExecutionContext;
import models.activityblueprint.ActivityBlueprint;
import play.db.jpa.JPAApi;
import scala.App;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.util.List;
import java.util.Optional;
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
        Optional<AppUser> userMaybe = Optional.ofNullable(em.find(AppUser.class, appUser.getId()));
        if (!userMaybe.isPresent()) {
            em.persist(appUser);
            return appUser;
        }
        return userMaybe.get();
    }

    private Stream<AppUser> list(EntityManager em) {
        String qlString = "select * from app_user";
        List<AppUser> appUsers = em.createQuery(qlString, AppUser.class).getResultList();
        return appUsers.stream();
    }

    @Override
    public CompletionStage<Stream<AppUser>> getAllFriends(String userId) {
        return supplyAsync(() -> wrap(em -> friendList(em, userId)), executionContext);
    }

    @Override
    public CompletionStage<Stream<AppUser>> getAllUsers() {
        return supplyAsync(() -> wrap(em -> userList(em)), executionContext);
    }

    @Override
    public CompletionStage<AppUser> getUser(String id) {
        return supplyAsync(() -> wrap(em -> {

            String sqlString = "select *" +
                    " from app_user" +
                    " where user_id = '" + id + "'";
            Query query = em.createNativeQuery(sqlString, AppUser.class);
            Object singleResult = query.getSingleResult();
            AppUser appUser = (AppUser) singleResult;
            return appUser;
        }), executionContext);
    }

    @Override
    public CompletionStage<Stream<AppUser>> searchUsers(String name) {
        return supplyAsync(() -> wrap(em -> userWithName(em, name)), executionContext);
    }

    private Stream<AppUser> userList(EntityManager em) {
        String sqlString = "select * from app_user";
        List<AppUser> userList = em.createNativeQuery(sqlString, AppUser.class).getResultList();
        return userList.stream();
    }

    private Stream<AppUser> friendList(EntityManager em, String userId) {
        String sqlString = "select distinct friend.* " +
                "from friendship fr1, friendship fr2, app_user friend " +
                "where (fr1.invitee_user_id = '" + userId +
                "' and friend.user_id = fr1.inviter_user_id" +
                " and fr1.accepted = true)" +
                " or (fr2.inviter_user_id = '" + userId +
                "' and friend.user_id = fr2.invitee_user_id" +
                " and fr2.accepted = true)";
        List<AppUser> friendList = em.createNativeQuery(sqlString, AppUser.class).getResultList();
        return friendList.stream();
    }

    private Stream<AppUser> userWithName(EntityManager em, String name){
        String sqlString = "select *" +
                " from app_user" +
                " where lower(name) like " + "lower('" + name + "%')";
        List<AppUser> users = em.createNativeQuery(sqlString, AppUser.class).getResultList();
        return users.stream();
    }
}
