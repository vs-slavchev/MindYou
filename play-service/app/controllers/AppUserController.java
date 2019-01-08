package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import models.appuser.AppUser;
import models.appuser.AppUserDTO;
import models.appuser.AppUserRepository;
import play.Logger;
import play.libs.Json;
import play.libs.concurrent.HttpExecutionContext;
import play.libs.ws.WSBodyReadables;
import play.libs.ws.WSBodyWritables;
import play.mvc.BodyParser;
import play.mvc.Controller;
import play.mvc.Http;
import play.mvc.Result;
import utils.AppUserDTOBodyParser;
import utils.AuthorizationException;
import utils.FirebaseInit;

import javax.inject.Inject;
import java.util.Optional;
import java.util.concurrent.CompletionStage;
import java.util.stream.Collectors;

import static java.util.concurrent.CompletableFuture.supplyAsync;

/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class AppUserController extends Controller implements WSBodyReadables, WSBodyWritables {

    private HttpExecutionContext httpExecutionContext;

    private final AppUserRepository appUserRepository;

    private final Logger.ALogger appUserLogger = Logger.of("appUser");

    @Inject
    public AppUserController(HttpExecutionContext ec, AppUserRepository appUserRepository) {
        this.httpExecutionContext = ec;
        this.appUserRepository = appUserRepository;
    }

    public CompletionStage<Result> getFriendList() {

        String verifiedUserId;
        try {
            verifiedUserId = FirebaseInit.getVerifiedUserIdFromRequestHeader(request());
        } catch (AuthorizationException ae) {
            return supplyAsync(() -> badRequest(ae.getMessage()));
        }

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

    @BodyParser.Of(AppUserDTOBodyParser.class)
    public CompletionStage<Result> createAppUser() {
        Http.RequestBody body = request().body();

        AppUserDTO appUserDTO = body.as(AppUserDTO.class);

        String verifiedUserId;
        try {
            verifiedUserId = FirebaseInit.getVerifiedUserIdFromRequestHeader(request());
        } catch (AuthorizationException ae) {
            return supplyAsync(() -> badRequest(ae.getMessage()));
        }

        // build user instance from verified id and data from json body
        AppUser appUser = new AppUser(verifiedUserId, appUserDTO.getName(), appUserDTO.getDeviceToken());

        appUserLogger.debug(appUser.toString());
        return appUserRepository.add(appUser)
                .thenApplyAsync(p -> ok(Json.toJson(p)), httpExecutionContext.current());
    }
}
