import React from "react";
import Point from "../../models/Point";
import PointDisplay from "../point/PointDisplay";
import './PointList.css';

interface Props {
    points: Map<number, Point>;
}

const PointList: React.FC<Props> = ({points}) => {
    console.log(points);
    console.log(Array.from(points));
    return (
        <div className="point-list">
            {Array.from(points).map(([index, point]) => 
                <PointDisplay index={index} point={point} />)}
        </div>
    )
}

export default PointList;