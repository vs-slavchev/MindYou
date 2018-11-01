package models.activityblueprint;

import com.google.inject.ImplementedBy;

import java.util.concurrent.CompletionStage;
import java.util.stream.Stream;

@ImplementedBy(JPAActivityBlueprintRepository.class)
public interface ActivityBlueprintRepository {

    CompletionStage<ActivityBlueprint> add(ActivityBlueprint activityBlueprint);

    CompletionStage<Stream<ActivityBlueprint>> list(int number);

    CompletionStage<ActivityBlueprint> item(int number);

}