package controllers;

import models.activityblueprint.ActivityBlueprintRepository;
import models.appuser.AppUser;
import models.appuser.AppUserRepository;
import play.Logger;
import play.data.FormFactory;
import play.libs.concurrent.HttpExecutionContext;
import play.libs.ws.WSBodyReadables;
import play.libs.ws.WSBodyWritables;
import play.libs.ws.WSClient;
import play.mvc.BodyParser;
import play.mvc.Controller;
import play.mvc.Http;
import play.mvc.Result;
import utils.AppUserBodyParser;

import javax.inject.Inject;
import java.util.concurrent.CompletionStage;
import java.util.stream.Collectors;

import static play.libs.Json.toJson;

/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class ActivityBlueprintController extends Controller implements WSBodyReadables, WSBodyWritables {

    private final WSClient ws;
    private HttpExecutionContext httpExecutionContext;

    private final AppUserRepository appUserRepository;
    private final ActivityBlueprintRepository activityBlueprintRepository;

    private final Logger.ALogger activityBlueprintLogger = Logger.of("activityBlueprint");

    @Inject
    public ActivityBlueprintController(WSClient ws, HttpExecutionContext ec,
                                       AppUserRepository personRepository,
                                       ActivityBlueprintRepository activityBlueprintRepository) {
        this.ws = ws;
        this.httpExecutionContext = ec;
        this.appUserRepository = personRepository;
        this.activityBlueprintRepository = activityBlueprintRepository;
    }

    public CompletionStage<Result> listActivities(Long number) {
        int castNumber = 0;
        try {
            castNumber = Math.toIntExact(number);
        } catch (ArithmeticException ae) {
             throw new RuntimeException("activity blueprint id too long");
        }
        return activityBlueprintRepository.list(castNumber)
                .thenApplyAsync(activityBlueprintStream -> ok(toJson(activityBlueprintStream
                        .collect(Collectors.toList()))), httpExecutionContext.current());
    }
}
