import React from "react";
import { createPortal } from 'react-dom';

interface ModalProps {
    isOpen: boolean;
    children?: React.ReactNode //przekazywanie children props w TS
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = (props) => {

    if(!props.isOpen) return null;

    return createPortal(
        <>
            <button onClick={props.onClose}>Zamknij modal</button>
            {props.children}
        </>,
        //document.getElementById('portal') //czemu to nie działa
        document.body
    )
}

export  default Modal;