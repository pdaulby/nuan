import React, { useRef } from "react";
import 'react-edit-text/dist/index.css';
import Topic from "./Topic";
import './Header.css';
import { readFileSync } from 'fs';
import store from "../store/Store";
import SaveButton from "./SaveButton";
import LoadButton from "./LoadButton";

const Header: React.FC = () => {
    const inputFile = useRef(null);
      
    const onButtonClick = () => {
        if (inputFile == null) return;
        // `current` points to the mounted file input element
       //inputFile.current.click();
    };
    

    return (
        <div className="row">
            <div className="topic-text">Topic: </div>
            <Topic />
            <SaveButton />
            <LoadButton />
        </div>
    )
}

export default Header;