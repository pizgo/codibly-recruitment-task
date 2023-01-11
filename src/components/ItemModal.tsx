import React from "react";
import {FetchedData} from "../interfaces";
import {Modal, Box, Typography, TableRow, TableCell} from "@mui/material";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    dataForModal: FetchedData
}
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ItemModal: React.FC<ModalProps> = (props) => {

    return (
        <Modal
            open={props.isOpen}
            onClose={props.onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={style}>
                {/*<Typography id="modal-modal-description">*/}
                {/*    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.*/}
                {/*</Typography>*/}
                <TableRow style={{background: props.dataForModal.color}}>
                    <TableCell>{props.dataForModal.id}</TableCell>
                    <TableCell>{props.dataForModal.name}</TableCell>
                    <TableCell>{props.dataForModal.year}</TableCell>
                    <TableCell>{props.dataForModal.color}</TableCell>
                    <TableCell>{props.dataForModal.pantone_value}</TableCell>
                </TableRow>
            </Box>
        </Modal>
    // sx={{ mt: 2 }}

    )
}

export  default ItemModal;