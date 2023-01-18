import React from "react";
import { Product } from "../types/interfaces";
import { productDescriptionModal } from "../consts/strings";
import { Paper, Modal, Box, TableContainer, Table, TableBody, TableRow, TableCell, TableHead } from "@mui/material";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    dataForModal?: Product
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'white',
    boxShadow: 24,
    outline: "none",
    p: 4,
}

const ItemModal: React.FC<ModalProps> = (props) => {

    if (!props.isOpen) return null

    const tableRowModal = (dataForModal: Product) => (
        <TableRow sx={{background: dataForModal.color}}>
            <TableCell align="center">{dataForModal.id}</TableCell>
            <TableCell align="center">{dataForModal.name}</TableCell>
            <TableCell align="center">{dataForModal.year}</TableCell>
            <TableCell align="center">{dataForModal.color}</TableCell>
            <TableCell align="center">{dataForModal.pantone_value}</TableCell>
        </TableRow>
    )

    return (
        <Modal
            open={props.isOpen}
            onClose={props.onClose}
            aria-labelledby="modal-table">
            <Box sx={style}>
                <TableContainer component={Paper}>
                <Table aria-label='modal-table'>
                    <TableHead>
                        <TableRow>
                            {productDescriptionModal.map((desc, key) =>
                                <TableCell align="center" sx= {{fontWeight: "bold"}} key={desc}>{desc}</TableCell>
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.dataForModal ? tableRowModal(props.dataForModal) : null}
                    </TableBody>
                </Table>
                </TableContainer>
            </Box>
        </Modal>
    // sx={{ mt: 2 }}
    )
}

export  default ItemModal;