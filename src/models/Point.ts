export default class Point {
    Title: string;
    Description: string;
    Sources: string;
    ParentId?: number;

    constructor(
        Title: string, 
        Description: string,
        Sources: string,
        ParentId?: number
        ) {
        this.Title = Title
        this.Description = Description
        this.Sources = Sources;
        this.ParentId = ParentId
    }
}