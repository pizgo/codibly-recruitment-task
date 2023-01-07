import React, {useEffect, useState} from "react";
import IdFilter from "./IdFilter";
import ProductList from "./ProductList";
import PaginateButtons from "./PaginateButtons";
import { fetchedData } from "./interfaces";

const Main: React.FC = () => {
    const [firstPageData, setFirstPageData] = useState<fetchedData[]>([]);

    useEffect(() => {
        fetch('https://reqres.in/api/products/?page=1&per_page=5',
        )
            .then ((response) => response.json())
            .then ((responseBody) => {
                setFirstPageData(responseBody.data)
            })
    }, [])

    //pagination logic:

    return (
        <>
            <IdFilter/>
            <ProductList firstPageData={firstPageData}/>
            <PaginateButtons/>
        </>
    )
}

export default Main;