import { observer } from 'mobx-react';
import React from "react";
import 'react-edit-text/dist/index.css';
import store from "../store/Store";
import { EditTextarea } from 'react-edit-text';

const Topic: React.FC = observer(() => 
    <div className="topic">
    <EditTextarea 
        placeholder="Type topic here." 
        className="edit-topic"
        onChange={store.updateTopic}
        value={store.topic}
    />
    </div>
)

export default Topic;