package controllers;

import models.trackedactivity.TrackedActivityRepository;
import models.trackedactivity.TrackedActivityStartDTO;
import play.Logger;
import play.libs.Json;
import play.libs.concurrent.HttpExecutionContext;
import play.libs.ws.WSBodyReadables;
import play.libs.ws.WSBodyWritables;
import play.libs.ws.WSClient;
import play.mvc.BodyParser;
import play.mvc.Controller;
import play.mvc.Http;
import play.mvc.Result;
import utils.FirebaseInit;
import utils.TrackedActivityStartDTOBodyParser;

import javax.inject.Inject;
import java.util.concurrent.CompletionStage;

/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class TrackedActivityController extends Controller implements WSBodyReadables, WSBodyWritables {

    private final WSClient ws;
    private HttpExecutionContext httpExecutionContext;

    private final TrackedActivityRepository trackedActivityRepository;

    private final Logger.ALogger trackedActivityLogger = Logger.of("trackedActivity");

    @Inject
    public TrackedActivityController(WSClient ws, HttpExecutionContext ec,
                                     TrackedActivityRepository trackedActivityRepository) {
        this.ws = ws;
        this.httpExecutionContext = ec;
        this.trackedActivityRepository = trackedActivityRepository;
    }

    @BodyParser.Of(TrackedActivityStartDTOBodyParser.class)
    public CompletionStage<Result> startActivity() {
        Http.RequestBody body = request().body();
        TrackedActivityStartDTO trackedActivityStartDTO = body.as(TrackedActivityStartDTO.class);

        // change token to id
        trackedActivityStartDTO.setUser_id(
                FirebaseInit.tokenToUserId(
                        trackedActivityStartDTO.getUser_id()
                )
        );

        return trackedActivityRepository.addFromDTO(trackedActivityStartDTO)
                .thenApplyAsync(ta -> ok(Json.toJson(ta)), httpExecutionContext.current());
    }

    public CompletionStage<Result> stopActivity(String userId) {

        // change token to id
        String verifiedUserId = FirebaseInit.tokenToUserId(userId);

        return trackedActivityRepository.stopTracking(verifiedUserId)
                .thenApplyAsync(ta -> ok(Json.toJson(ta)), httpExecutionContext.current());

    }

}
