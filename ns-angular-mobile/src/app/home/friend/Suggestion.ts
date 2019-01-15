export class Suggestion {
    activityId: string;
    name: string;

    constructor(id: string, name: string) {
        this.activityId= id;
        this.name = name;
    }

    toString(): string {
        return `Suggested activity: ${this.name}`
    }
}
