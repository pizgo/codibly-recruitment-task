import React, {useEffect, useState} from "react";
import IdFilter from "./IdFilter";
import ProductList from "./ProductList";
import PaginateButtons from "./PaginateButtons";
import { fetchedData } from "./interfaces";

const Main: React.FC = () => {
    const [pageData, setPageData] = useState<fetchedData[]>([]);

    let currentPageNumber = 1;

    useEffect(() => {
        fetch(`https://reqres.in/api/products/?page=${currentPageNumber}&per_page=5`,
        )
            .then ((response) => response.json())
            .then ((responseBody) => {
                setPageData(responseBody.data)
            })
    }, [])


    const handleNext = (currentPageNumber: number) => {
        currentPageNumber += 1
    }

    const handlePrev = (currentPageNumber: number) => {
        currentPageNumber -= 1;
    }

    return (
        <>
            <IdFilter/>
            <ProductList pageData={pageData}/>
            <PaginateButtons
                handleNext = {handleNext}
                handlePrev = {handlePrev}
            />
        </>
    )
}

export default Main;