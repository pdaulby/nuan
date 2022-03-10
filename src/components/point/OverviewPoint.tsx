import React from "react";
import Point from "../../models/Point";
import 'react-edit-text/dist/index.css';
import './Point.css';
import store from "../../store/Store";

interface Props {
    index: number;
    responseDepth: number;
    point: Point;
    selected: boolean;
}

const OverviewPoint: React.FC<Props> = ({index, responseDepth, point, selected}) => {
    const highlight = () => store.updateSelected(index, responseDepth);
    
    return (
        <div className={selected ? "unhighlighted selected" : "unhighlighted"} onClick={highlight}>
            <div className="title">{point.Title}</div>
        </div>
    )
}

export default OverviewPoint;