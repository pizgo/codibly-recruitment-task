import React from "react";
import {FetchedData} from "../interfaces";
import {Modal, Box, Typography, Table, TableBody, TableRow, TableCell, TableHead} from "@mui/material";

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
    width: 500,
    bgcolor: 'white',
    boxShadow: 24,
    p: 4,
   // display: 'flex'
};

const ItemModal: React.FC<ModalProps> = (props) => {

    if (!props.isOpen) return null

    return (
        <Modal
            open={props.isOpen}
            onClose={props.onClose}
            aria-labelledby="modal-table">
            <Box sx={style}>
                <Table aria-label='modal-table' sx = {{border: 1}}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Product ID</TableCell>
                            <TableCell>Product name</TableCell>
                            <TableCell>Year</TableCell>
                            <TableCell>Color</TableCell>
                            <TableCell>Pantone value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow style={{background: props.dataForModal.color}}>
                            <TableCell>{props.dataForModal.id}</TableCell>
                            <TableCell>{props.dataForModal.name}</TableCell>
                            <TableCell>{props.dataForModal.year}</TableCell>
                            <TableCell>{props.dataForModal.color}</TableCell>
                            <TableCell>{props.dataForModal.pantone_value}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Box>
        </Modal>
    // sx={{ mt: 2 }}

    )
}

export  default ItemModal;