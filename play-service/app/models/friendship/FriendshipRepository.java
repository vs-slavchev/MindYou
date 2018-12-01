package models.friendship;

import com.google.inject.ImplementedBy;
import models.appuser.AppUser;

import java.util.concurrent.CompletionStage;
import java.util.stream.Stream;

/**
 * This interface provides a non-blocking API for possibly blocking operations.
 */
@ImplementedBy(JPAFriendshipRepository.class)
public interface FriendshipRepository {

    CompletionStage<Friendship> createFriendRequest(String invitee_id, String verifiedUserId);

    CompletionStage<Friendship> acceptRequest(String friendshipId, String inviteeId);

    CompletionStage<Friendship> declineRequest(String friendshipId, String inviteeId);

    CompletionStage<Stream<Friendship>> list();

    CompletionStage<Stream<Friendship>> getReceivedFriendRequests(String userId);

    CompletionStage<Stream<Friendship>> getSentFriendRequests(String userId);
}
