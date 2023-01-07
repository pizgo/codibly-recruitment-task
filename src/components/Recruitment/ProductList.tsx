import React, {useEffect} from "react";

interface ProductListProps {
    pageData: {
        id: string,
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
                <ul>
                    {props.pageData.map((item, key) =>
                        <li key={item.id}>
                            <p>{item.id}</p>
                        </li>
                    )}
                </ul>
            </div>

        </>
    )
}

export default ProductList;