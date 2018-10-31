package models.friendship;

public class FriendshipRequestDTO {
    private Long inviter_id;

    private Long invitee_id;

    public FriendshipRequestDTO() {
    }

    public FriendshipRequestDTO(Long inviter_id, Long invitee_id) {
        this.inviter_id = inviter_id;
        this.invitee_id = invitee_id;
    }

    public Long getInviter_id() {
        return inviter_id;
    }

    public void setInviter_id(Long inviter_id) {
        this.inviter_id = inviter_id;
    }

    public Long getInvitee_id() {
        return invitee_id;
    }

    public void setInvitee_id(Long invitee_id) {
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
