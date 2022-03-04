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
            updateTitle: action,
            updateDescription: action,
            addPoint: action,
        });
    }

    get visiblePoints(): Map<number, Point>[] {
        console.log(this.points);
        let initial: Map<number, Point> = 
            new Map(this.points
                .filter(point => point.ParentId === -1)
                .map(point => [this.points.indexOf(point), point]));
        console.log(initial);
        return [initial];
        //TODO recursive nesting
    }

    updateTitle(index: number, title: string){
        let p: Point = Object.assign({}, this.points[index], {Title: title})
        this.points[index] = p;
    }

    updateDescription(index: number, description: string){
        let p: Point = Object.assign({}, this.points[index], {Description: description});
        this.points[index] = p;
    }

    addPoint(parentId: number){
        this.points.push(new Point('','',parentId));
        console.log(this.points.length);
    }

    
}

const store = new PointsStore();
export default store;