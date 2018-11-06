package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import models.activityblueprint.ActivityBlueprint;
import models.activityblueprint.ActivityBlueprintRepository;
import play.Logger;
import play.libs.Json;
import play.libs.concurrent.HttpExecutionContext;
import play.libs.ws.WSBodyReadables;
import play.libs.ws.WSBodyWritables;
import play.mvc.Controller;
import play.mvc.Result;

import javax.inject.Inject;
import java.util.Optional;
import java.util.concurrent.CompletionStage;
import java.util.stream.Collectors;



public class ActivityBlueprintController extends Controller implements WSBodyReadables, WSBodyWritables {

    private HttpExecutionContext httpExecutionContext;
    private final ActivityBlueprintRepository activityBlueprintRepository;

    private final Logger.ALogger activityBlueprintLogger = Logger.of("activityBlueprint");

    @Inject
    public ActivityBlueprintController(HttpExecutionContext ec,
                                       ActivityBlueprintRepository activityBlueprintRepository) {
        this.httpExecutionContext = ec;
        this.activityBlueprintRepository = activityBlueprintRepository;
    }

    public CompletionStage<Result> getActivityBlueprint(String id) {
        return activityBlueprintRepository.getSingle(id)
                .thenApplyAsync(ta -> ok(Json.toJson(ta)), httpExecutionContext.current());
    }

    public CompletionStage<Result> listActivities(Long number) {
        int castNumber = 0;
        try {
            castNumber = Math.toIntExact(number);
        } catch (ArithmeticException ae) {
            throw new RuntimeException("activity blueprint id too long");
        }
        return activityBlueprintRepository.list(castNumber)
                .thenApplyAsync(activityBlueprintStream -> ok(Json.toJson(activityBlueprintStream
                        .collect(Collectors.toList()))), httpExecutionContext.current());
    }

    public CompletionStage<Result> createActivityBlueprint() {


        Optional<JsonNode> json = Optional.of(request().body().asJson());
        String name = "";

        if (json.isPresent()) {
            name = json.get().findPath("name").textValue();
            /*if(name == null) {
                return badRequest("Missing parameter [name]");
            } else {
                return ok("Hello " + name);
            }*/
        }

        ActivityBlueprint blueprint = new ActivityBlueprint();
        blueprint.setName(name);

        return activityBlueprintRepository.add(blueprint)
                .thenApplyAsync(ab -> ok(Json.toJson(ab)), httpExecutionContext.current());
    }
}
