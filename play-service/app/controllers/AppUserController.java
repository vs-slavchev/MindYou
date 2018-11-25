package controllers;

import models.activityblueprint.ActivityBlueprintRepository;
import models.appuser.AppUser;
import models.appuser.AppUserRepository;
import play.Logger;
import play.data.FormFactory;
import play.libs.Json;
import play.libs.concurrent.HttpExecutionContext;
import play.libs.ws.WSBodyReadables;
import play.libs.ws.WSBodyWritables;
import play.libs.ws.WSClient;
import play.mvc.BodyParser;
import play.mvc.Controller;
import play.mvc.Http;
import play.mvc.Result;
import utils.AppUserBodyParser;
import utils.FirebaseInit;

import javax.inject.Inject;
import java.util.concurrent.CompletionStage;
import java.util.stream.Collectors;

/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class AppUserController extends Controller implements WSBodyReadables, WSBodyWritables {

    private final WSClient ws;
    private HttpExecutionContext httpExecutionContext;

    private final FormFactory formFactory;
    private final AppUserRepository appUserRepository;
    private final ActivityBlueprintRepository activityBlueprintRepository;

    private final Logger.ALogger appUserLogger = Logger.of("appUser");

    @Inject
    public AppUserController(WSClient ws, FormFactory formFactory, HttpExecutionContext ec,
                             AppUserRepository appUserRepository,
                             ActivityBlueprintRepository activityBlueprintRepository) {
        this.ws = ws;
        this.httpExecutionContext = ec;
        this.formFactory = formFactory;
        this.appUserRepository = appUserRepository;
        this.activityBlueprintRepository = activityBlueprintRepository;
    }

    public CompletionStage<Result> getFriendList(String userId) {

        // change token to id
        String verifiedUserId = FirebaseInit.tokenToUserId(userId);

        return appUserRepository.getAllFriends(verifiedUserId)
                .thenApplyAsync(friendListStream -> ok(Json.toJson(friendListStream
                        .collect(Collectors.toList()))), httpExecutionContext.current());
    }


    public CompletionStage<Result> showAllUsers() {
        return appUserRepository.getAllUsers()
                .thenApplyAsync(friendListStream -> ok(Json.toJson(friendListStream
                        .collect(Collectors.toList()))), httpExecutionContext.current());
    }

    public CompletionStage<Result> searchUsers(String name) {
        return appUserRepository.searchUsers(name)
                .thenApplyAsync(friendListStream -> ok(Json.toJson(friendListStream
                        .collect(Collectors.toList()))), httpExecutionContext.current());
    }

    public CompletionStage<Result> showUser(String userId) {
        return appUserRepository.getUser(userId)
                .thenApplyAsync(ta -> ok(Json.toJson(ta)), httpExecutionContext.current());
    }
    @BodyParser.Of(AppUserBodyParser.class)
    public CompletionStage<Result> createAppUser() {
        Http.RequestBody body = request().body();
        AppUser appUser = body.as(AppUser.class);

        // change token to id
        appUser.setId(FirebaseInit.tokenToUserId(appUser.getId()));

        appUserLogger.debug(appUser.toString());
        return appUserRepository.add(appUser)
                .thenApplyAsync(p -> ok(Json.toJson(p)), httpExecutionContext.current());
    }
}
