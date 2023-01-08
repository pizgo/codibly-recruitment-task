import React from "react";
import { createPortal } from 'react-dom';

interface ModalProps {
    isOpen: boolean;
    children?: React.ReactNode //przekazywanie children props w TS
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = (props) => {

    if(!props.isOpen) return null;

    return  (
        <>
            <button onClick={props.onClose}>Zamknij modal</button>
            <h2>{props.children}</h2>
        </>
        //document.getElementById('portal')
    )
}

export  default Modal;