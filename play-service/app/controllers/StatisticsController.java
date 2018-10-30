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

import javax.inject.Inject;
import java.util.concurrent.CompletionStage;

/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class StatisticsController extends Controller implements WSBodyReadables, WSBodyWritables {

    private final WSClient ws;
    private HttpExecutionContext httpExecutionContext;

    private final Logger.ALogger appUserLogger = Logger.of("statistics");

    @Inject
    public StatisticsController(WSClient ws, HttpExecutionContext ec,
                                AppUserRepository appUserRepository) {
        this.ws = ws;
        this.httpExecutionContext = ec;
    }

    public CompletionStage<Result> index() {
        appUserLogger.debug("calling statistics_service");
        String requestUrl = "http://192.168.178.206:5000/activity/swimming";

        return ws.url(requestUrl)
                .get().thenApplyAsync(answer -> {
                    ctx().flash().put("info", "Response updated!");
                    return ok("answer was " + answer.getBody(json()));
                }, httpExecutionContext.current());
    }

}
