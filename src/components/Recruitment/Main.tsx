import React, {useEffect, useState} from "react";
import IdFilter from "./IdFilter";
import ProductList from "./ProductList";
import PaginateButtons from "./PaginateButtons";
import { fetchedData } from "./interfaces";

const Main: React.FC = () => {
    const [pageData, setPageData] = useState<fetchedData[]>([]);
    const [pageNumber, setPageNumber] = useState<number>(1);

    let currentPageNumber = 1;

    useEffect(() => {
        fetch(`https://reqres.in/api/products/?page=${pageNumber}&per_page=5`,
        )
            .then ((response) => response.json())
            .then ((responseBody) => {
                setPageData(responseBody.data)
            })
    }, [])


    const handleNext = () => {
        setPageNumber(pageNumber + 1)
        console.log(pageNumber)
        fetch(`https://reqres.in/api/products/?page=${pageNumber}&per_page=5`,
        )
            .then ((response) => response.json())
            .then ((responseBody) => {
                setPageData(responseBody.data)
            })
        console.log(pageNumber)
    }

    const handlePrev = () => {
        setPageNumber(pageNumber - 1)
        console.log(pageNumber)
        fetch(`https://reqres.in/api/products/?page=${pageNumber}&per_page=5`,
        )
            .then ((response) => response.json())
            .then ((responseBody) => {
                setPageData(responseBody.data)
            })
        console.log(pageNumber)
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