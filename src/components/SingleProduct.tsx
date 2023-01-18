import {
    Paper,
    Modal,
    Box,
    TableContainer,
    Table,
    TableBody,
    TableRow,
    TableCell,
    TableHead } from "@mui/material";
import React from "react";
import { Product } from "../types/interfaces";
import { productDescriptionModal } from "../consts/strings";

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
};

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    product?: Product;
}

const SingleProduct: React.FC<ModalProps> = ({ isOpen, onClose, product}) => {

    if (!isOpen || !product) return null;

    return (
        <Modal open={isOpen} onClose={onClose} aria-labelledby="modal-table">
            <Box sx={style}>
                <TableContainer component={Paper}>
                <Table aria-label='modal-table'>
                    <TableHead>
                        <TableRow>
                            {productDescriptionModal.map((el, key) => (
                                <TableCell
                                    align="center"
                                    sx= {{fontWeight: "bold"}}
                                    key={el}>{el}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow sx={{ background: product.color }}>
                            <TableCell align="center">{product.id}</TableCell>
                            <TableCell align="center">{product.name}</TableCell>
                            <TableCell align="center">{product.year}</TableCell>
                            <TableCell align="center">{product.color}</TableCell>
                            <TableCell align="center">{product.pantone_value}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </TableContainer>
            </Box>
        </Modal>
    );
};

export default SingleProduct;