import React, { ChangeEventHandler, useRef } from "react";
import 'react-edit-text/dist/index.css';
import store from "../store/Store";

const LoadButton: React.FC = ({}) => {
    const inputFile = useRef<HTMLInputElement>(null);
    
    const onLoad: ChangeEventHandler<HTMLInputElement> = (event) => {
        event.persist();
        let file = event.target.files?.[0];
        if (!file) return;

        let reader = new FileReader();
        reader.onload = () => {
            store.loadStore(JSON.parse(reader.result as string));
        }
        reader.readAsText(file);
    }
   
    const callLoad = () => {
        inputFile?.current?.click();
    };

    return (<>
        <span className="unhighlighted add-button header-button"
         onClick={callLoad}>
            load
        </span>
        <input 
            type='file' 
            id='file' 
            ref={inputFile} 
            onChange={onLoad}
            style={{display: 'none'}}/>
    </>)
}

export default LoadButton;