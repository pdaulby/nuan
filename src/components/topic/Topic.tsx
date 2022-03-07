import React from "react";
import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import store from "../../store/Store";
import './Topic.css';

const Topic: React.FC = () => {
    return (
        <div className="topic">
        Topic: 
        <EditText 
            placeholder="Type topic here." 
            className="edit-topic"
            defaultValue={store.topic} //I should not be using this library
            onSave={(save) => store.updateTopic(save.value)}
        />
        </div>
    )
}

export default Topic;