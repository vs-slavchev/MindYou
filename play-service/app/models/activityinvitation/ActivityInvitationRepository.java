package models.activityinvitation;

import com.google.inject.ImplementedBy;

import java.util.concurrent.CompletionStage;
import java.util.stream.Stream;

@ImplementedBy(JPAActivityInvitationRepository.class)
public interface ActivityInvitationRepository{

    CompletionStage<ActivityInvitation> createInvitation(String invitee_id, String inviter_id, String activityId);

    CompletionStage<ActivityInvitation> acceptRequest(String invitationId, String inviteeId);

    CompletionStage<ActivityInvitation> declineRequest(String invitationId, String inviteeId);

    CompletionStage<Stream<ActivityInvitation>> list();
}
