import React from "react";

interface ProductListProps {
    pageData: {
        id: number,
        name: string,
        year: number,
        color: string,
        pantone_value: string
    }[];
    modalOpen: ({}) => void;
}

const ProductList: React.FC<ProductListProps> = props => {

    console.log(props.pageData)

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