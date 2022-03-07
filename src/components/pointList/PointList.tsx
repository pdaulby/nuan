import React from "react";
import Point from "../../models/Point";
import Responses from "../../models/Responses";
import store from "../../store/Store";
import PointDisplay from "../point/PointDisplay";
import UnhighlightedPoint from "../point/UnhighlightedPoint";
import PointModal from "../pointModal/PointModal";
import './PointList.css';

interface Props {
    responses: Responses;
    responseDepth: number;
}

const PointList: React.FC<Props> = ({responses, responseDepth}) => {
    let addResponse = (point: Point): void => {
        let parent = responseDepth === 0 ? -1 : store.selected[responseDepth-1];
        store.addPoint(point, parent, responseDepth);
    };
    return (
        <div className="point-list">
            {responses.Highlighted && <PointDisplay index={responses.Highlighted[0]} point={responses.Highlighted[1]} />}
            {Array.from(responses.Unhighlighted).map(([index, point]) => 
                <UnhighlightedPoint key={index} index={index} point={point} responseDepth={responseDepth}/> )}
            
            <PointModal key={responses.Highlighted && responses.Highlighted[0]}
                point={new Point('','','')} 
                submit={addResponse}>
            </PointModal>          
        </div>
    )
}

export default PointList;