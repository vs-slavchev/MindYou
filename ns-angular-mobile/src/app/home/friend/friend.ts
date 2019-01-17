export class Friend {
    id: string;
    name: string;
    isRequesting: boolean;
    isFriend: boolean;
    requested: boolean;
    invitationShared: boolean;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
        this.isRequesting = false;
        this.isFriend = false;
        this.requested = false;
        this.invitationShared = false;
    }

    // buttonText(): string {
    //     if (this.invitationShared) {
    //         return "Shared";
    //     }
    //     return "Not shared";
    // }
}
