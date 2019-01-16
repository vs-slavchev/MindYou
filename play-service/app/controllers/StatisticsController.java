package controllers;

import models.appuser.AppUserRepository;
import models.friendship.FriendshipRepository;
import play.Logger;
import play.libs.concurrent.HttpExecutionContext;
import play.libs.ws.WSBodyReadables;
import play.libs.ws.WSBodyWritables;
import play.libs.ws.WSClient;
import play.mvc.Controller;
import play.mvc.Result;
import utils.AuthorizationException;
import utils.FirebaseInit;

import javax.inject.Inject;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.CompletionStage;

import static java.util.concurrent.CompletableFuture.supplyAsync;

/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class StatisticsController extends Controller implements WSBodyReadables, WSBodyWritables {

    private static final Map<String, String> timePeriods = new HashMap<>();

    private final WSClient ws;
    private HttpExecutionContext httpExecutionContext;

    private final Logger.ALogger appUserLogger = Logger.of("statistics");

    @Inject
    public StatisticsController(WSClient ws, HttpExecutionContext ec,
                                AppUserRepository appUserRepository) {
        this.ws = ws;
        this.httpExecutionContext = ec;

        timePeriods.put("day", "1/day");
        timePeriods.put("week", "1/week");
        timePeriods.put("month", "1/month");
        timePeriods.put("quarter", "3/month");
        timePeriods.put("year", "1/year");
        timePeriods.put("", "");
    }

    public CompletionStage<Result> hoursPerActivity(String time) {
        String verifiedUserId;
        try {
            verifiedUserId = FirebaseInit.getVerifiedUserIdFromRequestHeader(request());
        } catch (AuthorizationException ae) {
            return supplyAsync(() -> badRequest(ae.getMessage()));
        }

        String path = String.format("hours-per-activity/%s/", verifiedUserId);

        return makeStatisticsRequest(path, time);
    }

    public CompletionStage<Result> hoursPerDay(String activityId, String time) {
        String verifiedUserId;
        try {
            verifiedUserId = FirebaseInit.getVerifiedUserIdFromRequestHeader(request());
        } catch (AuthorizationException ae) {
            return supplyAsync(() -> badRequest(ae.getMessage()));
        }

        String path = String.format("hours-per-day/%s/%s/", verifiedUserId, activityId);

        return makeStatisticsRequest(path, time);
    }

    public CompletionStage<Result> percentileRank(String activityId, String time) {
        String verifiedUserId;
        try {
            verifiedUserId = FirebaseInit.getVerifiedUserIdFromRequestHeader(request());
        } catch (AuthorizationException ae) {
            return supplyAsync(() -> badRequest(ae.getMessage()));
        }

        String path = String.format("percentile-rank/%s/%s/", verifiedUserId, activityId);

        return makeStatisticsRequest(path, time);
    }

    public CompletionStage<Result> topActivities(String time) {

        String path = "top-activities/";

        return makeStatisticsRequest(path, time);
    }

    public CompletionStage<Result> fourWeeksActivity(String activityId){

        String verifiedUserId;
        try {
            verifiedUserId = FirebaseInit.getVerifiedUserIdFromRequestHeader(request());
        } catch (AuthorizationException ae) {
            return supplyAsync(() -> badRequest(ae.getMessage()));
        }

        String path = String.format("four-weeks-activity/%s/%s/", verifiedUserId, activityId);

        return makeStatisticsRequest(path, "");
    }

    public CompletionStage<Result> topSixActivities(){

        String verifiedUserId;
        try {
            verifiedUserId = FirebaseInit.getVerifiedUserIdFromRequestHeader(request());
        } catch (AuthorizationException ae) {
            return supplyAsync(() -> badRequest(ae.getMessage()));
        }

        String path = String.format("top-six-activities/%s", verifiedUserId);

        return makeStatisticsRequest(path, "");
    }

    public CompletionStage<Result> suggestion(){

        String verifiedUserId;
        try {
            verifiedUserId = FirebaseInit.getVerifiedUserIdFromRequestHeader(request());
        } catch (AuthorizationException ae) {
            return supplyAsync(() -> badRequest(ae.getMessage()));
        }

        String path = String.format("suggestion/%s", verifiedUserId);

        return makeStatisticsRequest(path, "");
    }

    private CompletionStage<Result> makeStatisticsRequest(String path, String time) {

        String pathTimePeriod = timePeriods.get(time);

        appUserLogger.debug("calling statistics_service");
        String requestUrl = "http://localhost:5000/" + path + pathTimePeriod;

        return ws.url(requestUrl)
                .get()
                .thenApplyAsync(
                        answer -> ok(answer.getBody(json())),
                        httpExecutionContext.current()
                );
    }
}
