import React from "react";
import 'react-edit-text/dist/index.css';
import './Header.css';
import store from "../store/Store";

const NewButton: React.FC = () => {
    let confirm = () => {
        if(window.confirm('Are you sure? This will delete any unsaved data')) {
            store.loadStore({ "topic": "", "points": [], "selected": []} as any)
        }
    }
    return (
        <span 
         className="unhighlighted add-button header-button highlight-red"
         onClick={confirm}>
            new
        </span>
    )
}

export default NewButton;