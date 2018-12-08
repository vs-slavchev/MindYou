package models.trackedactivity;

import com.google.inject.ImplementedBy;
import models.appuser.AppUser;

import java.util.concurrent.CompletionStage;
import java.util.stream.Stream;

/**
 * This interface provides a non-blocking API for possibly blocking operations.
 */
@ImplementedBy(JPATrackedActivityRepository.class)
public interface TrackedActivityRepository {

    CompletionStage<TrackedActivity> createTrackedActivity(Long activityBlueprintId, String verifiedUserId);

    CompletionStage<TrackedActivity> stopTracking(String userId);

    CompletionStage<Stream<TrackedActivity>> list();
}
