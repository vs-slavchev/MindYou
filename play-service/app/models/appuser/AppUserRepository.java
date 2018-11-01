package models.appuser;

import com.google.inject.ImplementedBy;

import java.util.concurrent.CompletionStage;
import java.util.stream.Stream;

/**
 * This interface provides a non-blocking API for possibly blocking operations.
 */
@ImplementedBy(JPAAppUserRepository.class)
public interface AppUserRepository {

    CompletionStage<AppUser> add(AppUser appUser);

    CompletionStage<Stream<AppUser>> list();

    CompletionStage<Stream<AppUser>> getAllFriends(String userId);
}
