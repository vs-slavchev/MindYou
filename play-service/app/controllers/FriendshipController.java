package controllers;

import models.friendship.FriendshipRepository;
import play.Logger;
import play.libs.Json;
import play.libs.concurrent.HttpExecutionContext;
import play.libs.ws.WSBodyReadables;
import play.libs.ws.WSBodyWritables;
import play.libs.ws.WSClient;
import play.mvc.Controller;
import play.mvc.Result;
import utils.AuthorizationException;
import utils.FirebaseInit;

import javax.inject.Inject;
import java.util.concurrent.CompletionStage;
import java.util.stream.Collectors;

import static java.util.concurrent.CompletableFuture.supplyAsync;

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

    public CompletionStage<Result> sendFriendRequest(String invitee_id) {

        String verifiedUserId;
        try {
            verifiedUserId = FirebaseInit.getVerifiedUserIdFromRequestHeader(request());
        } catch (AuthorizationException ae) {
            return supplyAsync(() -> badRequest(ae.getMessage()));
        }

        return friendshipRepository.createFriendRequest(invitee_id, verifiedUserId)
                .thenApplyAsync(p -> ok("friendRequest sent"), httpExecutionContext.current());
    }

    public CompletionStage<Result> acceptFriendRequest(String friendship_id) {
        String verifiedInviteeId;
        try {
            verifiedInviteeId = FirebaseInit.getVerifiedUserIdFromRequestHeader(request());
        } catch (AuthorizationException ae) {
            return supplyAsync(() -> badRequest(ae.getMessage()));
        }

        return friendshipRepository.acceptRequest(friendship_id, verifiedInviteeId)
                .thenApplyAsync(p -> ok("friendRequest accepted"), httpExecutionContext.current());
    }

    public CompletionStage<Result> declineFriendRequest(String friendship_id){
        String verifiedInviteeId;
        try {
            verifiedInviteeId = FirebaseInit.getVerifiedUserIdFromRequestHeader(request());
        } catch (AuthorizationException ae) {
            return supplyAsync(() -> badRequest(ae.getMessage()));
        }

        return friendshipRepository.declineRequest(friendship_id, verifiedInviteeId)
                .thenApplyAsync(p -> ok("friendRequest declined"), httpExecutionContext.current());
    }

    public CompletionStage<Result> getReceivedFriendRequests() {
        String verifiedUserId;
        try {
            verifiedUserId = FirebaseInit.getVerifiedUserIdFromRequestHeader(request());
        } catch (AuthorizationException ae) {
            return supplyAsync(() -> badRequest(ae.getMessage()));
        }

        return friendshipRepository.getReceivedFriendRequests(verifiedUserId)
                .thenApplyAsync(friendListStream -> ok(Json.toJson(friendListStream
                        .collect(Collectors.toList()))), httpExecutionContext.current());
    }

    public CompletionStage<Result> getSentFriendRequests() {
        String verifiedUserId;
        try {
            verifiedUserId = FirebaseInit.getVerifiedUserIdFromRequestHeader(request());
        } catch (AuthorizationException ae) {
            return supplyAsync(() -> badRequest(ae.getMessage()));
        }

        return friendshipRepository.getSentFriendRequests(verifiedUserId)
                .thenApplyAsync(friendListStream -> ok(Json.toJson(friendListStream
                        .collect(Collectors.toList()))), httpExecutionContext.current());
    }
}
