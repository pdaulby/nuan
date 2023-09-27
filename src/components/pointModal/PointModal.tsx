import React, { useState } from "react";
import Point from "../../models/Point";
import Modal from 'react-modal';
import './PointModal.css';
import { EditTextarea } from "react-edit-text";

interface Props {
    point: Point;
    buttonImage: React.ReactNode;
    submit: (point: Point) => void;
}
//Modal.setAppElement("el");
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'aquamarine',
    },
  }; 

const PointModal: React.FC<Props> = ({point, buttonImage, submit}) => {
    const [isOpen, setIsOpen] = useState(false);

    const [title, setTitle] = useState(point.Title);
    const [description, setDescription] = useState(point.Description);
    const [sources, setSources] = useState(point.Sources);

    const saveAndClose = () => { 
        if (!title) return;
        submit(new Point(title, description, sources));
        setIsOpen(false);
    };

    return (<>
        <span onClick={()=>setIsOpen(true)}>
            {buttonImage}
        </span> 
        <Modal key={point.Title}
            id="modal"
            isOpen={isOpen}
            onRequestClose={()=>setIsOpen(false)}
            style={customStyles}
            contentLabel="Define Point"
            ariaHideApp={false}
        >
            <div className="point-items">
              <EditTextarea placeholder="Point Overview." value={title} onChange={setTitle} className="edit-text" />
              <EditTextarea placeholder="Detailed Description." value={description} onChange={setDescription} rows={7}  className="edit-text-area" />
              <EditTextarea placeholder="Sources." value={sources} onChange={setSources}  className="edit-text-area" />
              <button onClick={saveAndClose}>Save</button>
            </div>
        </Modal>
    </>)
}

export default PointModal;