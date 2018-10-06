package controllers;

import play.libs.concurrent.HttpExecutionContext;
import play.libs.ws.WSBodyReadables;
import play.libs.ws.WSBodyWritables;
import play.libs.ws.WSClient;
import play.mvc.Controller;
import play.mvc.Result;
import play.Logger;

import javax.inject.Inject;
import java.util.concurrent.CompletionStage;

/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class HomeController extends Controller implements WSBodyReadables, WSBodyWritables {

    private final WSClient ws;
    private HttpExecutionContext httpExecutionContext;
    private final Logger.ALogger statisticsProxyLogger = Logger.of("statisticsProxy");

    @Inject
    public HomeController(WSClient ws, HttpExecutionContext ec) {
        this.ws = ws;
        this.httpExecutionContext = ec;
    }


    public CompletionStage<Result> index() {
        statisticsProxyLogger.debug("calling statistics_service");
        String requestUrl = "https://jsonplaceholder.typicode.com/todos/1";
        //                   http://192.168.178.206:5000/activity/swimming

        return ws.url(requestUrl)
                .get().thenApplyAsync(answer -> {
                    ctx().flash().put("info", "Response updated!");
                    return ok("answer was " + answer.getBody(json()));
                }, httpExecutionContext.current());
    }

    public Result showUser(Long id) {
        return ok("user " + id);
    }

    public Result listActivities(Long number) {
        return ok("list of " + number);
    }

    public Result startActivity() {
        return ok();
    }


    public Result stopActivity() {
        return ok();
    }
}
