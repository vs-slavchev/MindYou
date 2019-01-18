package models.activityinvitation;

import models.DatabaseExecutionContext;
import models.activityblueprint.ActivityBlueprint;
import models.activityinvitation.ActivityInvitation;
import models.activityinvitation.ActivityInvitationRepository;
import models.appuser.AppUser;
import models.trackedactivity.TrackedActivity;
import play.db.jpa.JPAApi;
import play.libs.ws.WSClient;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.sql.Timestamp;
import java.util.List;
import java.util.concurrent.CompletionStage;
import java.util.function.Function;
import java.util.stream.Stream;

import static java.util.concurrent.CompletableFuture.supplyAsync;

/**
 * Provide JPA operations running inside of a thread pool sized to the connection pool
 */
public class JPAActivityInvitationRepository implements ActivityInvitationRepository {

    private WSClient ws;
    private final JPAApi jpaApi;
    private final DatabaseExecutionContext executionContext;

    @Inject
    public JPAActivityInvitationRepository(JPAApi jpaApi, DatabaseExecutionContext executionContext, WSClient ws) {
        this.jpaApi = jpaApi;
        this.executionContext = executionContext;
        this.ws = ws;
    }

    @Override
    public CompletionStage<ActivityInvitation> createInvitation(String invitee_id, String inviter_id, String activity_id) {
        return supplyAsync(() -> wrap(em -> {
            ActivityInvitation invitation = null;

            if (!inviter_id.equals(invitee_id)) {
                ActivityBlueprint activityBlueprint = em.find(ActivityBlueprint.class,
                        Long.parseLong(activity_id));
                AppUser inviter = em.find(AppUser.class, inviter_id);
                AppUser invitee = em.find(AppUser.class, invitee_id);
                System.out.println(activityBlueprint);
                System.out.println(inviter);
                System.out.println(invitee);
                invitation = new ActivityInvitation(activityBlueprint, inviter, invitee);
            }

            System.out.println(invitation);
            return insert(em, invitation);
        }), executionContext);
    }

    @Override
    public CompletionStage<ActivityInvitation> acceptRequest(String invitationId, String inviteeId) {
        return supplyAsync(() -> wrap(em -> {

            String sqlString = "select *" +
                    " from activity_invitation" +
                    " where invitation_id = '" + invitationId +
                    "' and invitee_user_id = '" + inviteeId + "'";

            Query query = em.createNativeQuery(sqlString, ActivityInvitation.class);
            Object singleResult = query.getSingleResult();
            ActivityInvitation invitation = (ActivityInvitation) singleResult;
            invitation.setAccepted(true);
            String jsonString = String.format("{\"notification\":{\"title\": \"MindYou\", \"text\": \"%s has accepted your activity invitation\", \"badge\": \"1\", \"sound\": \"default\"}, \"data\":{\"running\": \"2 hours\"}, \"priority\": \"High\", \"to\": \"%s\"}", invitation.getInviteeUser().getName(), invitation.getInviterUser().getDeviceToken());
            ws.url("https://fcm.googleapis.com/fcm/send")
                    .addHeader("Content-Type", "application/json")
                    .addHeader("Authorization", "key=AAAA7_KxZwU:APA91bGOysZbGFO-grloUHj50HfIgYJfeleOYygSBxZRdV4Fmnd60Gvj5MQlCA_zh2PcuQRhvsMnUS0BlU5LrZKO_xGIJMcIapv6WDbeJ6UdTg2GXs5JgSbc4n46ypvHwjahpyIWyWGc")
                    .post(jsonString);
            return invitation;
        }), executionContext);
    }

    @Override
    public CompletionStage<ActivityInvitation> declineRequest(String invitationId, String inviteeId) {
        return supplyAsync(() -> wrap(em -> {

            String sqlString = "select *" +
                    " from activity_invitation" +
                    " where invitation_id = '" + invitationId +
                    "' and invitee_user_id = '" + inviteeId + "'";

            Query query = em.createNativeQuery(sqlString, ActivityInvitation.class);
            Object singleResult = query.getSingleResult();
            ActivityInvitation invitation = (ActivityInvitation) singleResult;
            return remove(em, invitation);
        }), executionContext);
    }

    private <T> T wrap(Function<EntityManager, T> function) {
        return jpaApi.withTransaction(function);
    }

    private ActivityInvitation insert(EntityManager em, ActivityInvitation invitation) {
        em.persist(invitation);
        return invitation;
    }

    private ActivityInvitation remove(EntityManager em, ActivityInvitation invitation){
        em.remove(invitation);
        return invitation;
    }

    @Override
    public CompletionStage<Stream<ActivityInvitation>> list() {
        return supplyAsync(() -> wrap(em -> list(em)), executionContext);
    }

    @Override
    public CompletionStage<Stream<ActivityInvitation>> getReceivedActivityInvitation(String userId) {
        return supplyAsync(() -> wrap(em -> receivedActivityInvitationList(em, userId)), executionContext);
    }

    @Override
    public CompletionStage<Stream<ActivityInvitation>> getSentActivityInvitation(String userId) {
        return supplyAsync(() -> wrap(em -> sentActivityInvitationList(em, userId)), executionContext);
    }

    private Stream<ActivityInvitation> receivedActivityInvitationList(EntityManager em, String userId) {
        String sqlString = "select *" +
                " from activity_invitation" +
                " where invitee_user_id = '" + userId + "'" +
                " and accepted is not true";
        List<ActivityInvitation> activityInvitationList = em.createNativeQuery(sqlString, ActivityInvitation.class).getResultList();
        return activityInvitationList.stream();
    }

    private Stream<ActivityInvitation> sentActivityInvitationList(EntityManager em, String userId) {
        String sqlString = "select *" +
                " from activity_invitation" +
                " where inviter_user_id = '" + userId + "'" +
                " and accepted is not true";
        List<ActivityInvitation> activityInvitationList = em.createNativeQuery(sqlString, ActivityInvitation.class).getResultList();
        return activityInvitationList.stream();
    }

    private Stream<ActivityInvitation> list(EntityManager em) {
        String qlString = "select * from activity_invitation";
        List<ActivityInvitation> activityInvitations = em.createQuery(qlString, ActivityInvitation.class).getResultList();
        return activityInvitations.stream();
    }
}
