import Point from "./Point";

export default class Responses {
    Unhighlighted: Map<number, Point>;
    Highlighted?: [number, Point];

  constructor(Unhighlighted: Map<number, Point>, Highlighted?: [number, Point] ) {
    this.Unhighlighted = Unhighlighted;
    this.Highlighted = Highlighted;
  }
}