export default class Point {
    Title: string;
    Description: string;
    ParentId?: number;

    constructor(
        Title: string, 
        Description: string,
        ParentId?: number
        ) {
        this.Title = Title
        this.Description = Description
        this.ParentId = ParentId
    }
}