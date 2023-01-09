import React from "react";
import { createPortal } from 'react-dom';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    dataForModal: {
        id: number,
        name: string,
        year: number,
        color: string,
        pantone_value: string
    }
}

const Modal: React.FC<ModalProps> = (props) => {

    if(!props.isOpen) return null;

    return createPortal(
        <>
            <p>{props.dataForModal.id}</p>
            <p>{props.dataForModal.name}</p>
            <p>{props.dataForModal.year}</p>
            <p>{props.dataForModal.color}</p>
            <p>{props.dataForModal.pantone_value}</p>
            <button onClick={props.onClose}>Zamknij modal</button>
        </>,
        //document.getElementById('portal') //czemu to nie działa
        document.body
    )
}

export  default Modal;