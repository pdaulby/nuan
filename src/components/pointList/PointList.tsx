import React from "react";
import Point from "../../models/Point";
import store from "../../store/Store";
import PointDisplay from "../point/PointDisplay";
import './PointList.css';

interface Props {
    points: Map<number, Point>;
}

const PointList: React.FC<Props> = ({points}) => {
    return (
        <div className="point-list">
            {Array.from(points).map(([index, point]) => 
                <PointDisplay index={index} point={point} />)}
            <button className="add-button" onClick={()=>store.addPoint(-1)}>+</button>            
        </div>
    )
}


export default PointList;