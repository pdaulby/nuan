import React from "react";
import Point from "../../models/Point";
import store from "../../store/Store";
import PointDisplay from "../point/PointDisplay";
import PointModal from "../pointModal/PointModal";
import './PointList.css';

interface Props {
    points: Map<number, Point>;
}

const PointList: React.FC<Props> = ({points}) => {

    return (
        <div className="point-list">
            {Array.from(points).map(([index, point]) => 
                <PointDisplay index={index} point={point} highlighted={true}/>)}
            
            <PointModal 
                point={new Point('title','description','sources')} 
                submit={(point: Point)=>store.addPoint(point, -1)}>
            </PointModal>          
        </div>
    )
}

export default PointList;