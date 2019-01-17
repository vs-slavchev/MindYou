package controllers;

import models.activityinvitation.ActivityInvitationRepository;
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
public class ActivityInvitationController extends Controller implements WSBodyReadables, WSBodyWritables {

    private final WSClient ws;
    private HttpExecutionContext httpExecutionContext;

    private final ActivityInvitationRepository activityInvitationRepository;

    private final Logger.ALogger appUserLogger = Logger.of("activityInvitation");

    @Inject
    public ActivityInvitationController(WSClient ws, HttpExecutionContext ec,
                                ActivityInvitationRepository activityInvitationRepository) {
        this.ws = ws;
        this.httpExecutionContext = ec;
        this.activityInvitationRepository = activityInvitationRepository;
    }

    public CompletionStage<Result> sendInvitation(String invitee_id, String activity_id) {

        String verifiedUserId;
        try {
            verifiedUserId = FirebaseInit.getVerifiedUserIdFromRequestHeader(request());
        } catch (AuthorizationException ae) {
            return supplyAsync(() -> badRequest(ae.getMessage()));
        }

        return activityInvitationRepository.createInvitation(invitee_id, verifiedUserId, activity_id)
                .thenApplyAsync(p -> ok("invitation sent"), httpExecutionContext.current());
    }

    public CompletionStage<Result> acceptInvitation(String invitation_id) {
        String verifiedInviteeId;
        try {
            verifiedInviteeId = FirebaseInit.getVerifiedUserIdFromRequestHeader(request());
        } catch (AuthorizationException ae) {
            return supplyAsync(() -> badRequest(ae.getMessage()));
        }

        return activityInvitationRepository.acceptRequest(invitation_id, verifiedInviteeId)
                .thenApplyAsync(p -> ok("invitation accepted"), httpExecutionContext.current());
    }

    public CompletionStage<Result> declineInvitation(String invitation_id){
        String verifiedInviteeId;
        try {
            verifiedInviteeId = FirebaseInit.getVerifiedUserIdFromRequestHeader(request());
        } catch (AuthorizationException ae) {
            return supplyAsync(() -> badRequest(ae.getMessage()));
        }

        return activityInvitationRepository.declineRequest(invitation_id, verifiedInviteeId)
                .thenApplyAsync(p -> ok("invitation declined"), httpExecutionContext.current());
    }
}
