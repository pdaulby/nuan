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
    return (
        <div className="point-list">
            {Array.from(points).map(([index, point]) => 
                index === highlighted 
                ? <PointDisplay index={index} point={point} />
                : <UnhighlightedPoint index={index} point={point} responseDepth={responseDepth}/> )}
            
            <PointModal 
                point={new Point('title','description','sources')} 
                submit={(point: Point)=>store.addPoint(point, -1, responseDepth)}>
            </PointModal>          
        </div>
    )
}

export default PointList;