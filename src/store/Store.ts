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
            updateSelected: action,
            addPoint: action,
        });
    }

    get visiblePoints(): Map<number, Point>[] {
        console.log(this.points);
        return [-1].concat(this.selected).map(parentIndex=> 
            new Map(this.points
                .filter(point => point.ParentId === parentIndex)
                .map(point => [this.points.indexOf(point), point])
                )
            );
    }

    updateTitle(index: number, title: string){
        let p: Point = Object.assign({}, this.points[index], {Title: title})
        this.points[index] = p;
    }

    updateDescription(index: number, description: string){
        let p: Point = Object.assign({}, this.points[index], {Description: description});
        this.points[index] = p;
    }

    updatePoint(index: number, point: Point){
        point.ParentId = this.points[index].ParentId;
        this.points[index] = point;
    }

    updateSelected(index: number, responseDepth: number){
        this.selected = this.selected.slice(0, responseDepth);
        this.selected.push(index);

        var firstChild = this.points.findIndex(p=>p.ParentId === index);
        while (firstChild !== -1) {
            this.selected.push(firstChild);
            // eslint-disable-next-line no-loop-func
            firstChild = this.points.findIndex(p=>p.ParentId === firstChild);
        }

        console.log(this.selected);
    }

    addPoint(point: Point, parentId: number, responseDepth: number){
        console.log(parentId);
        point.ParentId = parentId;
        this.points.push(point);

        if (this.selected.length === responseDepth){
            this.selected.push(this.points.length-1);
        } 
        else {
            this.updateSelected(this.points.length-1, responseDepth);
        }
    }
    
}

const store = new PointsStore();
export default store;