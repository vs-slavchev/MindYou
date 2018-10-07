package controllers;

import models.activityblueprint.ActivityBlueprintRepository;
import models.appuser.AppUser;
import models.appuser.AppUserRepository;
import play.data.FormFactory;
import play.libs.concurrent.HttpExecutionContext;
import play.libs.ws.WSBodyReadables;
import play.libs.ws.WSBodyWritables;
import play.libs.ws.WSClient;
import play.mvc.BodyParser;
import play.mvc.Controller;
import play.mvc.Http;
import play.mvc.Result;
import play.Logger;
import utils.AppUserBodyParser;

import javax.inject.Inject;
import java.util.concurrent.CompletionStage;
import java.util.stream.Collectors;

import static play.libs.Json.toJson;

/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class HomeController extends Controller implements WSBodyReadables, WSBodyWritables {

    private final WSClient ws;
    private HttpExecutionContext httpExecutionContext;

    private final FormFactory formFactory;
    private final AppUserRepository appUserRepository;
    private final ActivityBlueprintRepository activityBlueprintRepository;

    private final Logger.ALogger statisticsProxyLogger = Logger.of("statisticsProxy");

    @Inject
    public HomeController(WSClient ws, FormFactory formFactory, HttpExecutionContext ec,
                          AppUserRepository personRepository,
                          ActivityBlueprintRepository activityBlueprintRepository) {
        this.ws = ws;
        this.httpExecutionContext = ec;
        this.formFactory = formFactory;
        this.appUserRepository = personRepository;
        this.activityBlueprintRepository = activityBlueprintRepository;
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

    public Result startActivity() {
        return ok();
    }

    public Result stopActivity(Long user_id) {
        return ok();
    }

    @BodyParser.Of(AppUserBodyParser.class)
    public CompletionStage<Result> createAppUser() {
        Http.RequestBody body = request().body();
        AppUser appUser = body.as(AppUser.class);


        //AppUser appUser = formFactory.form(AppUser.class).bindFromRequest().get();
        statisticsProxyLogger.debug(appUser.toString());
        return appUserRepository.add(appUser)
                .thenApplyAsync(p -> ok("appUser created"), httpExecutionContext.current());
    }
}
