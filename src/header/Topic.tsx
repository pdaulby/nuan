import { reaction } from "mobx";
import React, { useState } from "react";
import { EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import store from "../store/Store";

const Topic: React.FC = () => {
    const [topic, setTopic] = useState("");
    reaction(()=>store.topic, setTopic);

    return (
        <div className="topic">
        <EditTextarea 
            placeholder="Type topic here." 
            className="edit-topic"
            value={topic}
            onChange={store.updateTopic}
        />
        </div>
    )
}

export default Topic;