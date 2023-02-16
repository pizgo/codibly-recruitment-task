import React from "react";
import {
    TableContainer,
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
    Paper } from "@mui/material";
import { productDescriptionMain } from "../consts/strings";
import { Product } from "../types/types";

interface TableRowItemProps {
    product: Product;
    onChooseProduct: (item: Product) => void;
}

const TableRowItem : React.FC<TableRowItemProps> = ({ product, onChooseProduct }) => {

    const handleChooseProduct = () => {
        onChooseProduct(product)
    };

    return (
        <TableRow
            sx={{ background: product.color, cursor: "pointer" }}
            onClick={handleChooseProduct}>
            <TableCell align="center" sx={{ width: "20%" }}>
                {product.id}
            </TableCell>
            <TableCell align="center">{product.name}</TableCell>
            <TableCell align="center">{product.year}</TableCell>
        </TableRow>
    );
};

interface ProductListProps {
    products: Product[] | Product,
    onChooseProduct: (item: Product) => void,
}

const ProductList: React.FC<ProductListProps> = ({ products, onChooseProduct }) => {

    return (
        <>
            <TableContainer component={Paper} sx={{mt: 5}}>
                <Table  aria-label='simple-table'>
                    <TableHead>
                        <TableRow>
                            {productDescriptionMain.map((desc, key) =>
                                <TableCell align="center" key={desc} sx={{fontWeight: "bold"}}>{desc}</TableCell>
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {Array.isArray(products) ? (
                        products.map((item, key) => (
                            <TableRowItem
                                key={item.id}
                                product={item}
                                onChooseProduct={onChooseProduct}/>
                            ))
                        ) : (
                            <TableRowItem
                                product={products}
                                onChooseProduct={onChooseProduct}/>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
};

export default ProductList;