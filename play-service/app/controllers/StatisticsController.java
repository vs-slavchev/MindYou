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
import utils.FirebaseInit;

import javax.inject.Inject;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.CompletionStage;

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

        timePeriods.put("recent", "1/week");
        timePeriods.put("soon", "3/month");
        timePeriods.put("longterm", "1/year");
    }

    public CompletionStage<Result> hoursPerActivity(String userId, String time) {
        String verifiedUserId = FirebaseInit.tokenToUserId(userId);

        String path = String.format("hours-per-activity/%s/", verifiedUserId);

        return makeStatisticsRequest(path, time);
    }

    public CompletionStage<Result> hoursPerDay(String userId, String activityId, String time) {
        String verifiedUserId = FirebaseInit.tokenToUserId(userId);

        String path = String.format("hours-per-day/%s/%s/", verifiedUserId, activityId);

        return makeStatisticsRequest(path, time);
    }

    public CompletionStage<Result> percentileRank(String userId, String activityId, String time) {
        String verifiedUserId = FirebaseInit.tokenToUserId(userId);

        String path = String.format("percentile-rank/%s/%s/", verifiedUserId, activityId);

        return makeStatisticsRequest(path, time);
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
