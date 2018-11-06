package controllers;

import models.activityblueprint.ActivityBlueprintRepository;
import models.appuser.AppUser;
import models.appuser.AppUserRepository;
import models.friendship.FriendshipRepository;
import models.friendship.FriendshipRequestDTO;
import models.trackedactivity.TrackedActivityStartDTO;
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
import utils.FriendshipRequestDTOBodyParser;
import utils.TrackedActivityStartDTOBodyParser;

import javax.inject.Inject;
import java.util.concurrent.CompletionStage;
import java.util.stream.Collectors;

/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class FriendshipController extends Controller implements WSBodyReadables, WSBodyWritables {

    private final WSClient ws;
    private HttpExecutionContext httpExecutionContext;

    private final FriendshipRepository friendshipRepository;

    private final Logger.ALogger appUserLogger = Logger.of("friendship");

    @Inject
    public FriendshipController(WSClient ws, HttpExecutionContext ec,
                                FriendshipRepository friendshipRepository) {
        this.ws = ws;
        this.httpExecutionContext = ec;
        this.friendshipRepository = friendshipRepository;
    }

    @BodyParser.Of(FriendshipRequestDTOBodyParser.class)
    public CompletionStage<Result> sendFriendRequest() {
        Http.RequestBody body = request().body();
        FriendshipRequestDTO friendshipRequestDTO = body.as(FriendshipRequestDTO.class);

        //friendshipRequestLogger.debug(friendshipRequestDTO.toString());

        return friendshipRepository.addFromDTO(friendshipRequestDTO)
                .thenApplyAsync(p -> ok("friendRequest sent"), httpExecutionContext.current());
    }

    @BodyParser.Of(FriendshipRequestDTOBodyParser.class)
    public CompletionStage<Result> acceptFriendRequest() {
        Http.RequestBody body = request().body();
        FriendshipRequestDTO friendshipRequestDTO = body.as(FriendshipRequestDTO.class);

        return friendshipRepository.acceptRequest(friendshipRequestDTO)
                .thenApplyAsync(p -> ok("friendRequest accepted"), httpExecutionContext.current());
    }

    public CompletionStage<Result> getAllFriendRequests(String userId) {
        return friendshipRepository.getAllFriendRequests(userId)
                .thenApplyAsync(friendListStream -> ok(Json.toJson(friendListStream
                        .collect(Collectors.toList()))), httpExecutionContext.current());
    }
}
