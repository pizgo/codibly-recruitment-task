import React from "react";
import { FetchedData } from "../interfaces";
import { TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Paper } from "@mui/material";
import { productDescriptionMain } from "../stringResources";
import { tableCellHeaderStyle } from "../styles/styles";

interface ProductListProps {
    pageData: FetchedData[],
    modalOpen: ({}) => void,
}

const ProductList: React.FC<ProductListProps> = props => {

    const tableRow = (item: FetchedData) => (
        <TableRow key={item.id}
                  sx={{background: item.color, cursor: 'pointer'}}
                  onClick={() => props.modalOpen(item)}
                  >
            <TableCell align="center" sx={{width: "20%"}}>{item.id}</TableCell>
            <TableCell align="center">{item.name}</TableCell>
            <TableCell align="center">{item.year}</TableCell>
        </TableRow>
    )

    return (
        <>
            <TableContainer component={Paper} sx={{mt: 5}}>
                <Table  aria-label='simple-table'>
                    <TableHead>
                        <TableRow>
                            {productDescriptionMain.map((desc, key) =>
                                <TableCell align="center" key={desc} sx={tableCellHeaderStyle}>{desc}</TableCell>
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {Array.isArray(props.pageData) ?
                        props.pageData.map((item, key) => tableRow(item))
                        : tableRow(props.pageData)}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default ProductList;