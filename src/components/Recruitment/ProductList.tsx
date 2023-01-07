import React, {useEffect} from "react";

interface ProductListProps {
    firstPageData: {
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
                    {props.firstPageData.map((item, key) =>
                        <li key={item.id}>
                            <p>{item.name}</p>
                        </li>
                    )}
                </ul>
            </div>

        </>
    )
}

export default ProductList;