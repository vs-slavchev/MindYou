package models.activityinvitation;

import models.activityblueprint.ActivityBlueprint;
import models.appuser.AppUser;

import javax.persistence.*;

@Entity
@Table(name = "activity_invitation")
public class ActivityInvitation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "invitation_id")
    private Long invitationId;

    @JoinColumn(name = "activity_blueprint_id")
    @ManyToOne
    private ActivityBlueprint activityBlueprint;

    @JoinColumn(name = "inviter_user_id")
    @ManyToOne
    private AppUser inviterUser;

    @JoinColumn(name = "invitee_user_id")
    @ManyToOne
    private AppUser inviteeUser;

    @Column(name = "accepted")
    private Boolean accepted;

    public ActivityInvitation(ActivityBlueprint activityBlueprint, AppUser inviterUser, AppUser inviteeUser) {
        this.activityBlueprint = activityBlueprint;
        this.inviterUser = inviterUser;
        this.inviteeUser = inviteeUser;
    }

    public ActivityInvitation(){}

    public Long getInvitationId() {
        return invitationId;
    }

    public void setInvitationId(Long invitationId) {
        this.invitationId = invitationId;
    }

    public ActivityBlueprint getActivityBlueprint() {
        return activityBlueprint;
    }

    public void setActivityBlueprint(ActivityBlueprint activityBlueprint) {
        this.activityBlueprint = activityBlueprint;
    }

    public AppUser getInviterUser() {
        return inviterUser;
    }

    public void setInviterUser(AppUser inviterUser) {
        this.inviterUser = inviterUser;
    }

    public AppUser getInviteeUser() {
        return inviteeUser;
    }

    public void setInviteeUser(AppUser inviteeUser) {
        this.inviteeUser = inviteeUser;
    }

    public Boolean getAccepted() {
        return accepted;
    }

    public void setAccepted(Boolean accepted) {
        this.accepted = accepted;
    }
}