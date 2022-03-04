import { action, computed, makeObservable, observable } from 'mobx';
import Point from '../models/Point';

class PointsStore {
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
            addPoint: action,
        });
    }

    get visiblePoints(): Map<number, Point>[] {
        console.log(this.points);
        let initial: Map<number, Point> = 
            new Map(this.points
                .filter(point => !point.ParentId)
                .map(point => [this.points.indexOf(point), point]));
        console.log(initial);
        return [initial];
        //TODO recursive nesting
    }

    updatePoint(index: number, point: Point){
        this.points[index] = point;
    }

    addPoint(point: Point){
        this.points.push(point);
    }

    
}

const store = new PointsStore();
export default store;