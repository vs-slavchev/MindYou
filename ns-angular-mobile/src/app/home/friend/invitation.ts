import {Friend} from "~/app/home/friend/friend";
import {Item} from "~/app/home/item/item";

export class Invitation {
    invitationId: number;
    activityBlueprint: Item;
    inviterUser: Friend;
    inviteeUser: Friend;
    accepted: boolean;
}