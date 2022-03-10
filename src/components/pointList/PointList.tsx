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
            {responses.Highlighted !== undefined && 
                <PointDisplay index={responses.Highlighted} point={responses.Points.get(responses.Highlighted) as Point} />}
            
            <div className="unhighlighted-list">
                {Array.from(responses.Points)
                 .sort((a,b)=>a[1].Title.toLocaleLowerCase().localeCompare(b[1].Title.toLocaleLowerCase()))
                 .map(([index, point]) => 
                    <UnhighlightedPoint key={index} index={index} point={point} responseDepth={responseDepth}/> )}
            
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