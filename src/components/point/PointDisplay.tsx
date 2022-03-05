import React from "react";
import Point from "../../models/Point";
import 'react-edit-text/dist/index.css';
import './Point.css';
import store from "../../store/Store";
import PointModal from "../pointModal/PointModal";

interface Props {
    index: number;
    point: Point;
    highlighted: boolean;
}

const PointDisplay: React.FC<Props> = ({index, point, highlighted}) => {
    //TODO do as different components
    return (
        <div className={highlighted ? "point" : "unhighlighted"}>
            <div className="title">{point.Title}</div>
            { highlighted && <>
            <div className="description">{point.Description}</div>
            <div className="sources">{point.Sources}</div>            
            <PointModal 
                point={point} 
                submit={(p: Point)=>store.updatePoint(index, p)}>
            </PointModal> </>
            }
        </div>
    )
}

export default PointDisplay;