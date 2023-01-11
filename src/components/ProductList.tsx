import React from "react";
import { FetchedData } from "../interfaces";
import {Table, TableBody, TableRow, TableCell} from "@mui/material";



interface ProductListProps {
    pageData: FetchedData[],
    modalOpen: ({}) => void,
}

const ProductList: React.FC<ProductListProps> = props => {

    return (
        <>
            <div>
                <Table>
                    <TableBody>
                    {props.pageData.map((item, key) =>
                        <TableRow key={item.id}
                            style={{background: item.color}}
                            onClick={() => props.modalOpen(item)}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.year}</TableCell>
                        </TableRow>
                    )}
                    </TableBody>
                </Table>
            </div>
        </>
    )
}

export default ProductList;