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

    CompletionStage<Friendship> addFromDTO(FriendshipRequestDTO friendshipRequestDTO);

    CompletionStage<Friendship> acceptRequest(String inviterId, String inviteeId);

    CompletionStage<Stream<Friendship>> list();

    CompletionStage<Stream<Friendship>> getAllFriendRequests(String userId);
}
