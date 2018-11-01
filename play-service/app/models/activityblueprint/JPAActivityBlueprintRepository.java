package models.activityblueprint;

import models.DatabaseExecutionContext;
import play.db.jpa.JPAApi;
import play.mvc.Result;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.util.concurrent.CompletionStage;
import java.util.function.Function;
import java.util.stream.Stream;

import static java.util.concurrent.CompletableFuture.supplyAsync;

/**
 * Provide JPA operations running inside of a thread pool sized to the connection pool
 */
public class JPAActivityBlueprintRepository implements ActivityBlueprintRepository {

    private final JPAApi jpaApi;
    private final DatabaseExecutionContext executionContext;

    @Inject
    public JPAActivityBlueprintRepository(JPAApi jpaApi, DatabaseExecutionContext executionContext) {
        this.jpaApi = jpaApi;
        this.executionContext = executionContext;
    }

  /*  @Override
    public CompletionStage<ActivityBlueprint> get(Long id) {
        return supplyAsync(() -> wrap(em -> getActivityBlueprint(em, id)), executionContext);
    }*/

    @Override
    public CompletionStage<ActivityBlueprint> add(ActivityBlueprint activityBlueprint) {
        return supplyAsync(() -> wrap(em -> insert(em, activityBlueprint)), executionContext);
    }

    @Override
    public CompletionStage<Stream<ActivityBlueprint>> list(int number) {
        return supplyAsync(() -> wrap(em -> list(em, number)), executionContext);
    }

    private <T> T wrap(Function<EntityManager, T> function) {
        return jpaApi.withTransaction(function);
    }

    private ActivityBlueprint insert(EntityManager em, ActivityBlueprint activityBlueprint) {
        em.persist(activityBlueprint);
        return activityBlueprint;
    }
/*
    private ActivityBlueprint getActivityBlueprint(EntityManager em, int number) {
        return jpaApi.withTransaction(entityManager -> {
            String sqlString = "select * " +
                    "from activity_blueprint " +
                    "where activity_blueprint_id = " + number +
                    " limit 1";
            Query query = entityManager.createNativeQuery(sqlString, ActivityBlueprint.class);
            return query.getSingleResult();
        });
    }*/

    private Stream<ActivityBlueprint> list(EntityManager em, int number) {
        return jpaApi.withTransaction(entityManager -> {
            String sqlString = "select * " +
                    "from activity_blueprint " +
                    "order by activity_blueprint_id " +
                    "limit " + number;
            Query query = entityManager.createNativeQuery(sqlString, ActivityBlueprint.class);
            return query.getResultList().stream();
        });
    }

    @Override
    public CompletionStage<ActivityBlueprint> item(int number) {
        return supplyAsync(() -> wrap(em -> {

            String sqlString = "select * " +
                    "from activity_blueprint " +
                    "where activity_blueprint_id = " + number;
            Query query = em.createNativeQuery(sqlString, ActivityBlueprint.class);
            Object singleResult = query.getSingleResult();
            ActivityBlueprint activityBlueprint = (ActivityBlueprint) singleResult;
            return activityBlueprint;
        }), executionContext);
    }

}