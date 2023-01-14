import React from "react";
import { FetchedData } from "../interfaces";
import { Table, TableBody, TableHead, TableRow, TableCell } from "@mui/material";
import { productDescriptionMain } from "../stringResources";


interface ProductListProps {
    pageData: FetchedData[],
    modalOpen: ({}) => void,
}

const ProductList: React.FC<ProductListProps> = props => {

    const tableRow = (item: FetchedData) => (
        <TableRow key={item.id}
                  style={{background: item.color, cursor: 'pointer'}}
                  onClick={() => props.modalOpen(item)}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.year}</TableCell>
        </TableRow>
    )


    return (
        <>
            <div>
                <Table aria-label='table' sx = {{mt: 4, border: 1}}>
                    <TableHead>
                        <TableRow>
                            {productDescriptionMain.map((desc, key) =>
                                <TableCell key={desc}>{desc}</TableCell>
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {Array.isArray(props.pageData) ?
                        props.pageData.map((item, key) => tableRow(item))
                        : tableRow(props.pageData)}
                    </TableBody>
                </Table>
            </div>
        </>
    )
}

export default ProductList;