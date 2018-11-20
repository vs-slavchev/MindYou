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

    public CompletionStage<Result> acceptFriendRequest(String friendship_id, String inviter_id) {
        return friendshipRepository.acceptRequest(friendship_id, inviter_id)
                .thenApplyAsync(p -> ok("friendRequest accepted"), httpExecutionContext.current());
    }

    public CompletionStage<Result> declineFriendRequest(String friendship_id, String inviter_id){
        return friendshipRepository.declineRequest(friendship_id, inviter_id)
                .thenApplyAsync(p -> ok("friendRequest declined"), httpExecutionContext.current());
    }

    public CompletionStage<Result> getReceivedFriendRequests(String userId) {
        return friendshipRepository.getReceivedFriendRequests(userId)
                .thenApplyAsync(friendListStream -> ok(Json.toJson(friendListStream
                        .collect(Collectors.toList()))), httpExecutionContext.current());
    }

    public CompletionStage<Result> getSentFriendRequests(String userId) {
        return friendshipRepository.getSentFriendRequests(userId)
                .thenApplyAsync(friendListStream -> ok(Json.toJson(friendListStream
                        .collect(Collectors.toList()))), httpExecutionContext.current());
    }
}
