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

export class PointMap {
    index: number;
    point: Point;
    
  constructor(index: number, point: Point) {
    this.index = index
    this.point = point
  }
}