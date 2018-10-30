package models.friendship;

import models.appuser.AppUser;

import javax.persistence.*;

@Entity
@Table(name = "friendship")
public class Friendship {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "friendship_id")
    private Long friendshipId;

    @JoinColumn(name = "inviter_user_id")
    @ManyToOne
    private AppUser inviterUser;

    @JoinColumn(name = "invitee_user_id")
    @ManyToOne
    private AppUser inviteeUser;

    @Column(name = "accepted")
    private Boolean accepted;

    public Friendship(AppUser inviterUser, AppUser inviteeUser) {
        this.inviterUser = inviterUser;
        this.inviteeUser = inviteeUser;
    }

    public Friendship() {
    }

    public Long getFriendshipId() {
        return friendshipId;
    }

    public void setFriendshipId(Long friendshipId) {
        this.friendshipId = friendshipId;
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
