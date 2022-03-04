import React from "react";
import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import './Topic.css';

const Topic: React.FC = () => {

    return (
        <div className="topic">
        Topic: <EditText placeholder="Type topic here." className="edit-topic" />
        </div>
    )
}

export default Topic;