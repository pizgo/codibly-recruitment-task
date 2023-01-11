import React, {useEffect, useState} from "react";
import IdFilter from "./components/IdFilter";
import ProductList from "./components/ProductList";
import PaginateButtons from "./components/PaginateButtons";
import Modal from "./components/Modal";
import { FetchedData } from "./interfaces";

const App: React.FC = () => {
    const [pageData, setPageData] = useState<FetchedData[]>([]);
    const [pageNumberFromApi, setPageNumberFromApi] = useState<number>(1);
    const [totalPagesFromApi, setTotalPagesFromApi] = useState<any>();
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [dataForModal, setDataForModal]= useState<any>();

    useEffect(()  : void => {
        fetch(`https://reqres.in/api/products/?per_page=5`)
            .then ((response) => response.json())
            .then ((responseBody) => {
                setPageData(responseBody.data);
                console.log(responseBody)
            })
    }, [])

    const filterID = (enteredId: string) : void => {
        let input;
        if (enteredId) {
            input = `https://reqres.in/api/products/?id=${enteredId}`;
        } else {
            input = `https://reqres.in/api/products/?per_page=5`
        }
        fetch(input)
                .then ((response) => response.json())
                .then ((responseBody) => {
                    setPageData([responseBody.data].flat())
                })
    }

    const handleNext = () : void => {
        let newPageNumber : number = pageNumber + 1;
        setPageNumber(newPageNumber)
        fetch(`https://reqres.in/api/products/?page=${newPageNumber}&per_page=5`,
        )
            .then ((response) => response.json())
            .then ((responseBody) => {
                setPageData(responseBody.data)
                setPageNumberFromApi(responseBody.page);
                setTotalPagesFromApi(responseBody.total_pages);
            })
    }

    const handlePrev = () : void => {
        let newPageNumber : number = pageNumber - 1;
        setPageNumber(newPageNumber)
        fetch(`https://reqres.in/api/products/?page=${newPageNumber}&per_page=5`,
        )
            .then ((response) => response.json())
            .then ((responseBody) => {
                setPageData(responseBody.data)
                setPageNumberFromApi(responseBody.page);
                setTotalPagesFromApi(responseBody.total_pages);
            })
    }

    const modalOpen = (item: {}) : void => {
        setIsModalOpen(true);
        setDataForModal(item);
    }
    const onClose = () => setIsModalOpen(false);

    return (
        <>
            <IdFilter filterId= {filterID}/>
            <ProductList
                pageData={pageData}
                modalOpen = {modalOpen}/>
            <PaginateButtons
                handleNext = {handleNext}
                handlePrev = {handlePrev}
                pageNumberFromApi = {pageNumberFromApi}
                totalPagesFromApi = {totalPagesFromApi}
                pageData={pageData}/>
            <Modal
                isOpen={isModalOpen}
                onClose={onClose}
                dataForModal={dataForModal}/>
        </>
    )
}

export default App;