import React from "react";
import 'react-edit-text/dist/index.css';
import './Header.css';
import store from "../store/Store";

const SaveButton: React.FC = () => {
      
    const saveFile = async () => {
        const blob = new Blob([JSON.stringify(store, null, 2)], {type : 'application/json'});
        const a = document.createElement('a');
        a.download = 'discussion.txt';
        a.href = URL.createObjectURL(blob);
        a.addEventListener('click', (e) => {
          setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1000);
        });
        a.click();
      };

    return (
        <span 
         className="unhighlighted add-button header-button"
         onClick={saveFile}>
            save
        </span>
    )
}

export default SaveButton;