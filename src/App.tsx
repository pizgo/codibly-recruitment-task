import React, {useEffect, useState} from "react";
import IdFilter from "./components/IdFilter";
import ProductList from "./components/ProductList";
import PaginateButtons from "./components/PaginateButtons";
import Modal from "./components/Modal";
import { FetchedData } from "./interfaces";
import {fetchingDataFiltered, fetchingDataPaginated, fetchingMainPageData} from './api-methods';

const App: React.FC = () => {
    const [pageData, setPageData] = useState<FetchedData[]>([]);
    const [pageNumberFromApi, setPageNumberFromApi] = useState<number>(1);
    const [totalPagesFromApi, setTotalPagesFromApi] = useState<any>();
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [dataForModal, setDataForModal]= useState<any>();


    useEffect(()  : void => {
        fetchingMainPageData()
            .then ((response: Response) => response.json())
            .then ((responseBody: any) => {
                setPageData(responseBody.data);
                console.log(responseBody)
            })
    }, [])

    const filterID = (enteredId: string) : void => {
        let fetchedData : Promise<Response>;
        if (enteredId) {
            fetchedData = fetchingDataFiltered(enteredId)
        } else {
            fetchedData = fetchingMainPageData()
        }
        fetchedData
                .then ((response: Response) => response.json())
                .then ((responseBody: any) => {
                    setPageData([responseBody.data].flat())
                })
    }

    const handleNext = () : void => {
        let newPageNumber : number = pageNumber + 1;
        setPageNumber(newPageNumber)
        fetchingDataPaginated(newPageNumber)
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
        fetchingDataPaginated(newPageNumber)
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