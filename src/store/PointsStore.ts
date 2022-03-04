import { action, computed, makeObservable, observable } from 'mobx';
import Point from '../models/Point';

export default class PointsStore {
    topic: string = "Enter topic here";
    points: Point[] = [];
    selected: number[] = [];

    constructor() {
        makeObservable(this, {
            topic: observable,
            points: observable,
            selected: observable,
            visiblePoints: computed,
            updatePoint: action,
        });
    }

    get visiblePoints(): Point[][] {
        let initial: Point[] = this.points.filter(point => !point.ParentId);
        return [initial];
        //TODO recursive nesting
    }

    updatePoint(index: number, point: Point){
        this.points[index] = point;
    }
}