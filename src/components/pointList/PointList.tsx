import React from "react";
import Point from "../../models/Point";
import Responses from "../../models/Responses";
import store from "../../store/Store";
import PointDisplay from "../point/PointDisplay";
import OverviewPoint from "../point/OverviewPoint";
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
            {responses.Highlighted !== undefined && 
                <PointDisplay index={responses.Highlighted} point={responses.Points.get(responses.Highlighted) as Point} />}
            
            <div className="unhighlighted-list">
                {Array.from(responses.Points)
                 .map(([index, point]) => 
                    <OverviewPoint key={index} index={index} point={point} responseDepth={responseDepth} selected={index === responses.Highlighted}/> )}
            
                <PointModal key={responses.Highlighted}
                    point={new Point('','','')} 
                    buttonImage={<div className="unhighlighted add-button">Add Response</div>}
                    submit={addResponse}>
                </PointModal>  
            </div>        
        </div>
    )
}

export default PointList;