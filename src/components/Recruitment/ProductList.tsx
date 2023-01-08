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
                <ul>
                    {props.pageData.map((item, key) =>
                        <li key={item.id}>
                            <p>{item.name}</p>
                            <p>{item.year}</p>
                            <p>{item.pantone_value}</p>
                        </li>
                    )}
                </ul>
            </div>

        </>
    )
}

export default ProductList;