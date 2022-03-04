import React from "react";
import { EditText, EditTextarea } from 'react-edit-text';
import Point from "../../models/Point";
import 'react-edit-text/dist/index.css';
import './Point.css';

interface Props {
    index: number;
    point: Point;
}

const PointDisplay: React.FC<Props> = ({index, point}) => {

    return (
        <div className="point">
            <EditText 
                defaultValue={point.Title}
                placeholder="Point Title"
                className="edit-text" 
            />
            <EditTextarea 
                defaultValue={point.Description}
                placeholder="Point Description"
                className="edit-text-area" 
                rows={7} //should be dynamic, 
                // awkward library, not gonna use it in the future
            />
        </div>
    )
}

export default PointDisplay;