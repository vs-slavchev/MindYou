export class Friend {
    id: string;
    name: string;
    isRequesting: boolean;
    isFriend: boolean;
    requested: boolean;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
        this.isRequesting = false;
        this.isFriend = false;
        this.requested = false;
    }
}
