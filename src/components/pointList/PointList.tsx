import React from "react";
import Point from "../../models/Point";
import store from "../../store/Store";
import PointDisplay from "../point/PointDisplay";
import UnhighlightedPoint from "../point/UnhighlightedPoint";
import PointModal from "../pointModal/PointModal";
import './PointList.css';

interface Props {
    points: Map<number, Point>;
    responseDepth: number;
    highlighted: number;
}

const PointList: React.FC<Props> = ({points, responseDepth, highlighted}) => {
    console.log(responseDepth);
    let addResponse = (point: Point): void => {
        let parent = responseDepth === 0 ? -1 : store.selected[responseDepth-1];
        store.addPoint(point, parent, responseDepth);
    };
    return (
        <div className="point-list">
            {Array.from(points).map(([index, point]) => 
                index === highlighted 
                ? <PointDisplay index={index} point={point} />
                : <UnhighlightedPoint index={index} point={point} responseDepth={responseDepth}/> )}
            
            <PointModal 
                point={new Point('title','description','sources')} 
                submit={addResponse}>
            </PointModal>          
        </div>
    )
}

export default PointList;