package models.trackedactivity;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "tracked_activity")
public class TrackedActivity {

    @Id
    @GeneratedValue
    @Column(name = "tracked_activity_id")
    private Long tackedActivityId;

    @Column(name = "activity_blueprint_id")
    private Long activityBlueprintId;

    @Column(name = "user_id")
    private Long appUserId;

    @Column(name = "time_start")
    private Timestamp timeStart;

    @Column(name = "duration_minutes")
    private Integer durationMinutes;

    @Column(name = "public_visibility")
    private Boolean publicVisibility;

    public TrackedActivity(Long activityBlueprintId, Long appUserId, Timestamp timeStart,
                           Integer durationMinutes, Boolean publicVisibility) {
        this.activityBlueprintId = activityBlueprintId;
        this.appUserId = appUserId;
        this.timeStart = timeStart;
        this.durationMinutes = durationMinutes;
        this.publicVisibility = publicVisibility;
    }

    public TrackedActivity() {}

    public Long getTackedActivityId() {
        return tackedActivityId;
    }

    public void setTackedActivityId(Long tackedActivityId) {
        this.tackedActivityId = tackedActivityId;
    }

    public Long getActivityBlueprintId() {
        return activityBlueprintId;
    }

    public void setActivityBlueprintId(Long activityBlueprintId) {
        this.activityBlueprintId = activityBlueprintId;
    }

    public Long getAppUserId() {
        return appUserId;
    }

    public void setAppUserId(Long appUserId) {
        this.appUserId = appUserId;
    }

    public Timestamp getTimeStart() {
        return timeStart;
    }

    public void setTimeStart(Timestamp timeStart) {
        this.timeStart = timeStart;
    }

    public Integer getDurationMinutes() {
        return durationMinutes;
    }

    public void setDurationMinutes(Integer durationMinutes) {
        this.durationMinutes = durationMinutes;
    }

    public Boolean getPublicVisibility() {
        return publicVisibility;
    }

    public void setPublicVisibility(Boolean publicVisibility) {
        this.publicVisibility = publicVisibility;
    }
}
