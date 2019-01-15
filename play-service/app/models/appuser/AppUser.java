package models.appuser;

import javax.persistence.*;

@Entity
@Table(name = "app_user")
public class AppUser {

    @Id
    @Column(name = "user_id")
    private String id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "device_token")
    private String deviceToken;

    public AppUser(String id, String name, String deviceToken) {
        this.id = id;
        this.name = name;
        this.deviceToken = deviceToken;
    }

    public AppUser() {}

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDeviceToken() { return deviceToken; }

    public void setDeviceToken(String deviceToken) { this.deviceToken = deviceToken; }

    @Override
    public String toString() {
        return "AppUser{" +
                "id=" + id +
                ", name=" + name +
                ", deviceToken=" + deviceToken +
                '}';
    }
}
