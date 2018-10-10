package models.trackedactivity;

/**
 * Used to carry data to be used to build a TrackedActivity upon start.
 */
public class TrackedActivityStartDTO {

    private Long activity_id;

    private Long user_id;

    public TrackedActivityStartDTO() {
    }

    public TrackedActivityStartDTO(Long activity_id, Long user_id) {
        this.activity_id = activity_id;
        this.user_id = user_id;
    }

    public Long getActivity_id() {
        return activity_id;
    }

    public void setActivity_id(Long activity_id) {
        this.activity_id = activity_id;
    }

    public Long getUser_id() {
        return user_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    @Override
    public String toString() {
        return "TrackedActivityStartDTO{" +
                "activity_id=" + activity_id +
                ", user_id=" + user_id +
                '}';
    }
}
