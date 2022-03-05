import React from "react";
import Point from "../../models/Point";
import 'react-edit-text/dist/index.css';
import './Point.css';
import store from "../../store/Store";
import PointModal from "../pointModal/PointModal";

interface Props {
    index: number;
    point: Point;
}

const PointDisplay: React.FC<Props> = ({index, point}) => {
    return (
        <div className="point">
            <div className="title">{point.Title}</div>
            <div className="description">{point.Description}</div>
            <div className="sources">{point.Sources}</div>            
            <PointModal 
                point={point} 
                submit={(p: Point)=>store.updatePoint(index, p)}>
            </PointModal>
        </div>
    )
}

export default PointDisplay;