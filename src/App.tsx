import React, {useEffect, useState} from "react";
import IdFilter from "./components/IdFilter";
import ProductList from "./components/ProductList";
import PaginateButtons from "./components/PaginateButtons";
import Modal from "./components/Modal";
import { fetchedData } from "./interfaces";

const App: React.FC = () => {
    const [pageData, setPageData] = useState<fetchedData[]>([]);
    const [pageNumberFromApi, setPageNumberFromApi] = useState<number>(1);
    const [totalPagesFromApi, setTotalPagesFromApi] = useState<any>();
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [dataForModal, setDataForModal]= useState<any>();
    const [searchedId, setSearchedId]= useState<any>();

    useEffect(() => {
        fetch(`https://reqres.in/api/products/?per_page=5`)
            .then ((response) => response.json())
            .then ((responseBody) => {
                setPageData(responseBody.data);
                console.log(responseBody)
            })
    }, [])

    const searchId = (enteredId: any) => {
        setSearchedId(enteredId)
        console.log(enteredId)
    }


    const handleNext = () => {
        let newPageNumber = pageNumber + 1;
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

    const handlePrev = () => {
        let newPageNumber = pageNumber - 1;
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

    const modalOpen = (item: {}) => {
        setIsModalOpen(true);
        setDataForModal(item);
    }
    const onClose = () => setIsModalOpen(false);

    return (
        <>
            <IdFilter
                searchId = {searchId}/>
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