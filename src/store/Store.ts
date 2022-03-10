import { action, computed, makeObservable, observable } from 'mobx';
import Point from '../models/Point';
import Responses from '../models/Responses';

class PointsStore {
    topic: string = "";
    points: Point[] = [];
    selected: number[] = [];

    constructor() {
        makeObservable(this, {
            topic: observable,
            points: observable,
            selected: observable,
            visiblePoints: computed,
            updateSelected: action,
            updateTopic: action,
            updatePoint: action,
            addPoint: action,
            loadStore: action,
        });
    }

    get visiblePoints(): Responses[] {
        return [-1].concat(this.selected).map((p, r)=>this.getResponses(p, r));
    }

    getResponses(parentId: number, responseDepth: number): Responses {
        if (this.selected.length <= responseDepth) return new Responses(new Map<number, Point>());

        let highlightedId: number = this.selected[responseDepth];
        let pointMap: Map<number, Point> = new Map(this.points
            .filter((point) => point.ParentId === parentId)
            .map(point => [this.points.indexOf(point), point])
            )
        return new Responses(pointMap, highlightedId)
    }

    updatePoint(index: number, point: Point){
        point.ParentId = this.points[index].ParentId;
        this.points[index] = point;
    }

    updateSelected(index: number, responseDepth: number){
        this.selected = this.selected.slice(0, responseDepth);
        this.selected.push(index);

        let firstChild = this.points.findIndex(p=>p.ParentId === index);
        while (firstChild !== -1) {
            this.selected.push(firstChild);
            // eslint-disable-next-line no-loop-func
            firstChild = this.points.findIndex(p=>p.ParentId === firstChild);
        }

        console.log(this.selected);
    }

    updateTopic = (topic: string) => this.topic = topic;

    addPoint(point: Point, parentId: number, responseDepth: number){
        point.ParentId = parentId;
        this.points.push(point);

        if (this.selected.length === responseDepth){
            this.selected.push(this.points.length-1);
        } 
        else {
            this.updateSelected(this.points.length-1, responseDepth);
        }
    }

    loadStore(newStore: PointsStore){
        this.topic = newStore.topic;
        this.points = newStore.points;
        this.selected = newStore.selected;
    } 
    
}

const store = new PointsStore();
export default store;