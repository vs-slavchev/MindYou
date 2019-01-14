package controllers;

import models.trackedactivity.TrackedActivityRepository;
import play.Logger;
import play.libs.Json;
import play.libs.concurrent.HttpExecutionContext;
import play.libs.ws.WSBodyReadables;
import play.libs.ws.WSBodyWritables;
import play.libs.ws.WSClient;
import play.mvc.Controller;
import play.mvc.Result;
import utils.AuthorizationException;
import utils.FirebaseInit;

import javax.inject.Inject;
import java.util.concurrent.CompletionStage;

import static java.util.concurrent.CompletableFuture.supplyAsync;

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

    public CompletionStage<Result> startActivity(Long activity_id) {

        String verifiedUserId;
        try {
            verifiedUserId = FirebaseInit.getVerifiedUserIdFromRequestHeader(request());
        } catch (AuthorizationException ae) {
            return supplyAsync(() -> badRequest(ae.getMessage()));
        }

        return trackedActivityRepository.createTrackedActivity(activity_id, verifiedUserId)
                .thenApplyAsync(ta -> ok(Json.toJson(ta)), httpExecutionContext.current());
    }

    public CompletionStage<Result> stopActivity() {

        String verifiedUserId;
        try {
            verifiedUserId = FirebaseInit.getVerifiedUserIdFromRequestHeader(request());
        } catch (AuthorizationException ae) {
            return supplyAsync(() -> badRequest(ae.getMessage()));
        }

        return trackedActivityRepository.stopTracking(verifiedUserId)
                .thenApplyAsync(ta -> ok(Json.toJson(ta)), httpExecutionContext.current());

    }

    public CompletionStage<Result> currentActivity(){
        String verifiedUserId;
        try {
            verifiedUserId = FirebaseInit.getVerifiedUserIdFromRequestHeader(request());
        } catch (AuthorizationException ae) {
            return supplyAsync(() -> badRequest(ae.getMessage()));
        }

        return trackedActivityRepository.getCurrentActivity(verifiedUserId)
                .thenApplyAsync(ta -> ok(Json.toJson(ta)), httpExecutionContext.current());

    }

}
