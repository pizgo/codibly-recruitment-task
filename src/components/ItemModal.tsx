import React from "react";
import { createPortal } from 'react-dom';
import {FetchedData} from "../interfaces";
import Modal from "@mui/material/Button";


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    dataForModal: FetchedData
}

const ItemModal: React.FC<ModalProps> = (props) => {

    if(!props.isOpen) return null;

    return createPortal(
        <Modal>
            <p>{props.dataForModal.id}</p>
            <p>{props.dataForModal.name}</p>
            <p>{props.dataForModal.year}</p>
            <p>{props.dataForModal.color}</p>
            <p>{props.dataForModal.pantone_value}</p>
            <button onClick={props.onClose}>Zamknij modal</button>
        </Modal>,
        document.body
    )
}

export  default ItemModal;