import Point from "./Point";

export default class Responses {
    Points: Map<number, Point>;
    Highlighted?: number;

  constructor(Unhighlighted: Map<number, Point>, Highlighted?: number ) {
    this.Points = Unhighlighted;
    this.Highlighted = Highlighted;
  }
}