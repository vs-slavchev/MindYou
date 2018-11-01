package models.friendship;

public class FriendshipRequestDTO {
    private String inviter_id;

    private String invitee_id;

    public FriendshipRequestDTO() {
    }

    public FriendshipRequestDTO(String inviter_id, String invitee_id) {
        this.inviter_id = inviter_id;
        this.invitee_id = invitee_id;
    }

    public String getInviter_id() {
        return inviter_id;
    }

    public void setInviter_id(String inviter_id) {
        this.inviter_id = inviter_id;
    }

    public String getInvitee_id() {
        return invitee_id;
    }

    public void setInvitee_id(String invitee_id) {
        this.invitee_id = invitee_id;
    }

    @Override
    public String toString() {
        return "FriendshipRequestDTO{" +
                "inviter_id=" + inviter_id +
                ", invitee_id=" + invitee_id +
                '}';
    }
}
