package models.trackedactivity;

import models.DatabaseExecutionContext;
import models.activityblueprint.ActivityBlueprint;
import models.appuser.AppUser;
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
public class JPATrackedActivityRepository implements TrackedActivityRepository {

    private final JPAApi jpaApi;
    private final DatabaseExecutionContext executionContext;

    @Inject
    public JPATrackedActivityRepository(JPAApi jpaApi, DatabaseExecutionContext executionContext) {
        this.jpaApi = jpaApi;
        this.executionContext = executionContext;
    }

    /**
     * Construct a TrackedActivity instance from the DTO.
     */
    public CompletionStage<TrackedActivity> addFromDTO(
            TrackedActivityStartDTO trackedActivityStartDTO) {
        return supplyAsync(() -> wrap(em -> {

            ActivityBlueprint activityBlueprint = em.find(ActivityBlueprint.class,
                    trackedActivityStartDTO.getActivity_id());

            AppUser appUser = em.find(AppUser.class, trackedActivityStartDTO.getUser_id());


            TrackedActivity trackedActivity = new TrackedActivity(activityBlueprint, appUser,
                    new Timestamp(System.currentTimeMillis()), null, true);


            return insert(em, trackedActivity);
        }), executionContext);
    }

    private TrackedActivity insert(EntityManager em, TrackedActivity trackedActivity) {
        em.persist(trackedActivity);
        return trackedActivity;
    }

    public CompletionStage<TrackedActivity> stopTracking(String userId) {
        return supplyAsync(() -> wrap(em -> {

            String sqlString = "select ta.* " +
                    "from tracked_activity ta, app_user au " +
                    "where ta.user_id = '" + userId +
                    "' and ta.duration_minutes is NULL " +
                    "limit 1";
            Query query = em.createNativeQuery(sqlString, TrackedActivity.class);
            Object singleResult = query.getSingleResult();
            TrackedActivity trackedActivity = (TrackedActivity) singleResult;
            long durationMinutes = (new Timestamp(System.currentTimeMillis()).getTime()
                    - trackedActivity.getTimeStart().getTime()) / 60000;

            // don't save to database
            if (durationMinutes < 1) {
                em.remove(trackedActivity);
            } else {
                // do save
                trackedActivity.setDurationMinutes(durationMinutes);
            }

            return trackedActivity;
        }), executionContext);
    }

    @Override
    public CompletionStage<Stream<TrackedActivity>> list() {
        return supplyAsync(() -> wrap(em -> list(em)), executionContext);
    }

    private <T> T wrap(Function<EntityManager, T> function) {
        return jpaApi.withTransaction(function);
    }

    private Stream<TrackedActivity> list(EntityManager em) {
        String qlString = "select * from app_user;";
        List<TrackedActivity> trackedActivities = em.createQuery(qlString, TrackedActivity.class)
                .getResultList();
        return trackedActivities.stream();
    }
}
