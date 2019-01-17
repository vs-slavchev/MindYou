"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Invitation = /** @class */ (function () {
    function Invitation(id, activityName, inviterName) {
        this.invitationId = id;
        this.activityName = activityName;
        this.inviterUser.name = inviterName;
    }
    Invitation.prototype.toString = function () {
        return this.inviterUser.name + " invites you for activity: " + this.activityName;
    };
    return Invitation;
}());
exports.Invitation = Invitation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52aXRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImludml0YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQU1BLG9CQUFZLEVBQVUsRUFBRSxZQUFtQixFQUFFLFdBQW1CO1FBQzVELElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztJQUN4QyxDQUFDO0lBRUQsNkJBQVEsR0FBUjtRQUNJLE9BQVUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLG1DQUE4QixJQUFJLENBQUMsWUFBYyxDQUFBO0lBQ3BGLENBQUM7SUFFRCxpQkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7QUFoQlksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZyaWVuZH0gZnJvbSBcIn4vYXBwL2hvbWUvZnJpZW5kL2ZyaWVuZFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEludml0YXRpb24ge1xyXG4gICAgaW52aXRhdGlvbklkOiBudW1iZXI7XHJcbiAgICBhY3Rpdml0eU5hbWU6IHN0cmluZztcclxuICAgIGludml0ZXJVc2VyOiBGcmllbmQ7XHJcblxyXG5cclxuY29uc3RydWN0b3IoaWQ6IG51bWJlciwgYWN0aXZpdHlOYW1lOnN0cmluZywgaW52aXRlck5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5pbnZpdGF0aW9uSWQgPSBpZDtcclxuICAgIHRoaXMuYWN0aXZpdHlOYW1lID0gYWN0aXZpdHlOYW1lO1xyXG4gICAgdGhpcy5pbnZpdGVyVXNlci5uYW1lID0gaW52aXRlck5hbWU7XHJcbn1cclxuXHJcbnRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYCR7dGhpcy5pbnZpdGVyVXNlci5uYW1lfSBpbnZpdGVzIHlvdSBmb3IgYWN0aXZpdHk6ICR7dGhpcy5hY3Rpdml0eU5hbWV9YFxyXG59XHJcblxyXG59XHJcbiJdfQ==