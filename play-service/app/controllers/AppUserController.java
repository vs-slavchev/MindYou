package controllers;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;
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
import java.io.FileInputStream;
import java.io.IOException;
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


    public Result showAllUsers() {
        //return play.mvc.Results.TODO;
        return registerUser();
    }

    public Result searchUsers(String name) {
        return play.mvc.Results.TODO;
    }

    public Result showUser(Long id) {
        return play.mvc.Results.TODO;
    }

/*
    public CompletionStage<Result> index() {
        appUserLogger.debug("calling statistics_service");
        String requestUrl = "https://jsonplaceholder.typicode.com/todos/1";
        //                   http://192.168.178.206:5000/activity/swimming

        return ws.url(requestUrl)
                .get().thenApplyAsync(answer -> {
                    ctx().flash().put("info", "Response updated!");
                    return ok("answer was " + answer.getBody(json()));
                }, httpExecutionContext.current());
    }*/

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

    public Result registerUser() {
        Http.RequestBody body = request().body();

        // idToken comes from the client app (shown above)
        String test = "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk4Njk0NWJmMWIwNDYxZjBiZDViNTRhZWQ0YzQ1ZWU0ODMzMjgxOWEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbWluZHlvdS1hYjg2NyIsImF1ZCI6Im1pbmR5b3UtYWI4NjciLCJhdXRoX3RpbWUiOjE1NDEyNzcyOTIsInVzZXJfaWQiOiJKQmRIM0pyaXZWY21hR0FFd3RLTkVrT2x4cjAyIiwic3ViIjoiSkJkSDNKcml2VmNtYUdBRXd0S05Fa09seHIwMiIsImlhdCI6MTU0MTI3NzI5NywiZXhwIjoxNTQxMjgwODk3LCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3RAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.RfuL3SZ7XIOBDtx4NcfG2j8k2YyB1Vm_yCBng_AHrRPjNsiXRQQ_0njBQjBdcaQJxYepq2ttEs0z46-tUOYoY_CSudHk5OaiAk5vxEhNhGTH6frWAtwDwkipQ3QnunKIDQqHWT4ACYHEyLY9HZplRLqrG3I7cnY3mQKL3saXZ6joN6-fJ5pyIWRhCcfpb2ecsd7Gas3BPGQkdlTVQcrT1tFL7fQg6K7KZ-bYe7GrYYKdVIfe234g1bzEcvBOdU7I2r6-tCQKoQc_V9e7nGJzRjkXvQyjIJleHXM7RMKdP5_B4HT0sSTNu-lZr0z-WPqMlWSpyOATfCqjhbxEOHt2cw";
        String uid = FirebaseInit.tokenToUserId(test);
        return ok(uid);
    }
}
