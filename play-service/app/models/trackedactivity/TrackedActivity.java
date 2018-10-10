package models.trackedactivity;

import models.activityblueprint.ActivityBlueprint;
import models.appuser.AppUser;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "tracked_activity")
public class TrackedActivity {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "tracked_activity_id")
    private Long trackedActivityId;

    @JoinColumn(name = "activity_blueprint_id")
    @ManyToOne
    private ActivityBlueprint activityBlueprint;

    @JoinColumn(name = "user_id")
    @ManyToOne
    private AppUser appUser;

    @Column(name = "time_start")
    private Timestamp timeStart;

    @Column(name = "duration_minutes", nullable = true)
    private Long durationMinutes;

    @Column(name = "public_visibility")
    private Boolean publicVisibility;

    public TrackedActivity(ActivityBlueprint activityBlueprint, AppUser appUser, Timestamp timeStart,
                           Long durationMinutes, Boolean publicVisibility) {
        this.activityBlueprint = activityBlueprint;
        this.appUser = appUser;
        this.timeStart = timeStart;
        this.durationMinutes = durationMinutes;
        this.publicVisibility = publicVisibility;
    }

    public TrackedActivity() {
    }

    public Long getTrackedActivityId() {
        return trackedActivityId;
    }

    public void setTrackedActivityId(Long tackedActivityId) {
        this.trackedActivityId = tackedActivityId;
    }

    public ActivityBlueprint getActivityBlueprint() {
        return activityBlueprint;
    }

    public void setActivityBlueprint(ActivityBlueprint activityBlueprint) {
        this.activityBlueprint = activityBlueprint;
    }

    public AppUser getAppUser() {
        return appUser;
    }

    public void setAppUser(AppUser appUser) {
        this.appUser = appUser;
    }

    public Timestamp getTimeStart() {
        return timeStart;
    }

    public void setTimeStart(Timestamp timeStart) {
        this.timeStart = timeStart;
    }

    public Long getDurationMinutes() {
        return durationMinutes;
    }

    public void setDurationMinutes(Long durationMinutes) {
        this.durationMinutes = durationMinutes;
    }

    public Boolean getPublicVisibility() {
        return publicVisibility;
    }

    public void setPublicVisibility(Boolean publicVisibility) {
        this.publicVisibility = publicVisibility;
    }
}
