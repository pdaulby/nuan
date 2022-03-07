import React from "react";
import Point from "../../models/Point";
import 'react-edit-text/dist/index.css';
import './Point.css';
import store from "../../store/Store";
import PointModal from "../pointModal/PointModal";
import { AiFillEdit } from "react-icons/ai";

interface Props {
    index: number;
    point: Point;
}

const PointDisplay: React.FC<Props> = ({index, point}) => {
    return (
        <div className="point">
            <div className="row">
                <div className="title">{point.Title}</div>
                <PointModal 
                    point={point} 
                    buttonImage={<AiFillEdit className="edit-button" />}
                    submit={(p: Point)=>store.updatePoint(index, p)}>
                </PointModal>
            </div>
            <div className="description">{point.Description}</div>
            <div className="sources">{point.Sources}</div>            
        </div>
    )
}

export default PointDisplay;