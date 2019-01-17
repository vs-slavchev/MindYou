import {Friend} from "~/app/home/friend/friend";

export class Invitation {
    invitationId: number;
    activityName: string;
    inviterUser: Friend;


constructor(id: number, activityName:string, inviterName: string) {
    this.invitationId = id;
    this.activityName = activityName;
    this.inviterUser.name = inviterName;
}

toString(): string {
    return `${this.inviterUser.name} invites you for activity: ${this.activityName}`
}

}
