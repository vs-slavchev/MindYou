package models.activityblueprint;

import javax.persistence.*;

@Entity
@Table(name = "activity_blueprint")
public class ActivityBlueprint {

    @Id
    @Column(name = "activity_blueprint_id")
    @GeneratedValue
    private Long activityBlueprintId;

    @Column(name = "name")
    private String name;

    public ActivityBlueprint(String name) {
        this.name = name;
    }

    public ActivityBlueprint() {}

    public Long getActivityBlueprintId() {
        return activityBlueprintId;
    }

    public void setActivityBlueprintId(Long activityBlueprintId) {
        this.activityBlueprintId = activityBlueprintId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
