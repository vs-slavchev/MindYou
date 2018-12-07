import {Friend} from "~/app/home/friend/friend";

export class Friendship {
    friendshipId: number;
    inviterUser: Friend;
    inviteeUser: Friend;
    accepted: boolean;
}