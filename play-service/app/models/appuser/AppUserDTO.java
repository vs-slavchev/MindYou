package models.appuser;

/**
 * Used to carry data to be used to build a AppUser when creating user.
 */
public class AppUserDTO {

    private String name;

    public AppUserDTO() {
    }

    public AppUserDTO(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "AppUserDTO{" +
                ", name=" + name +
                '}';
    }
}
