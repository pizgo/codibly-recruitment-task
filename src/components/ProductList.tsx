import React from "react";
import { fetchedData } from "../interfaces";


interface ProductListProps {
    pageData: fetchedData[],
    modalOpen: ({}) => void,
}

const ProductList: React.FC<ProductListProps> = props => {

    return (
        <>
            <div>
                <table>
                    {props.pageData.map((item, key) =>
                        <tr key={item.id}
                            style={{background: item.color}}
                            onClick={() => props.modalOpen(item)}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.year}</td>
                        </tr>
                    )}
                </table>
            </div>
        </>
    )
}

export default ProductList;