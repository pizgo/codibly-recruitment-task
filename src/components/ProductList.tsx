import React from "react";
import { FetchedData } from "../interfaces";


interface ProductListProps {
    pageData: FetchedData[],
    modalOpen: ({}) => void,
}

const ProductList: React.FC<ProductListProps> = props => {

    return (
        <>
            <div>
                <table>
                    <tbody>
                    {props.pageData.map((item, key) =>
                        <tr key={item.id}
                            style={{background: item.color}}
                            onClick={() => props.modalOpen(item)}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.year}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ProductList;