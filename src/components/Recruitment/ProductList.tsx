import React, {useEffect} from "react";

interface ProductListProps {
    pageData: {
        id: number,
        name: string,
        year: number,
        color: string,
        pantone_value: string
    }[];
}

const ProductList: React.FC<ProductListProps> = props => {


    return (
        <>
            <div>
                <table>
                    {props.pageData.map((item, key) =>
                        <tr key={item.id}
                        style={{background: item.color}}>
                            <th>{item.id}</th>
                            <th>{item.name}</th>
                            <th>{item.year}</th>
                        </tr>
                    )}
                </table>
            </div>

        </>
    )
}

export default ProductList;