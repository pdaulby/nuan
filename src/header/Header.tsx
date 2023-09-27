import React from "react";
import 'react-edit-text/dist/index.css';
import Topic from "./Topic";
import './Header.css';
import SaveButton from "./SaveButton";
import LoadButton from "./LoadButton";

const Header: React.FC = () => {
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