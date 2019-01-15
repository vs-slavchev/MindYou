package models.appuser;

/**
 * Used to carry data to be used to build a AppUser when creating user.
 */
public class AppUserDTO {

    private String name;

    private String deviceToken;

    public AppUserDTO() {}

    public AppUserDTO(String name, String deviceToken) {
        this.name = name;
        this.deviceToken = deviceToken;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDeviceToken() {
        return deviceToken;
    }

    public void setDeviceToken(String deviceToken) {
        this.deviceToken = deviceToken;
    }

    @Override
    public String toString() {
        return "AppUserDTO{" +
                "name=" + name +
                ", device_token=" + deviceToken +
                '}';
    }
}
