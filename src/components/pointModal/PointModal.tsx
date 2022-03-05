import React, { useState } from "react";
import Point from "../../models/Point";
import Modal from 'react-modal';
import './PointModal.css';

interface Props {
    point: Point;
    submit: (point: Point) => void;
}

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

const PointModal: React.FC<Props> = ({point, submit}) => {
    const [isOpen, setIsOpen] = useState(false);

    const [title, setTitle] = useState(point.Title);
    const [description, setDescription] = useState(point.Description);
    const [sources, setSources] = useState(point.Sources);

    const saveAndClose = () => { 
        submit(new Point(title, description, sources));
        setIsOpen(false);
    };

    return (<>
        <button onClick={()=>setIsOpen(true)}>btn</button> 
        <Modal
            isOpen={isOpen}
            //onAfterOpen={afterOpenModal}
            onRequestClose={()=>setIsOpen(false)}
            style={customStyles}
            contentLabel="Define Point"
        >
            <div className="point-items">
              <input value={title} onChange={(e)=>setTitle(e.target.value)} />
              <textarea value={description} onChange={(e)=>setDescription(e.target.value)} />
              <textarea value={sources} onChange={(e)=>setSources(e.target.value)} />
              <button onClick={saveAndClose}>Save</button>
            </div>
        </Modal>
    </>)
}

export default PointModal;