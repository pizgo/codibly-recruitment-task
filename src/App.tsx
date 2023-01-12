import React, {useEffect, useState} from "react";
import {Container, Typography} from "@mui/material/";
import IdFilter from "./components/IdFilter";
import ProductList from "./components/ProductList";
import PaginateButtons from "./components/PaginateButtons";
import ItemModal from "./components/ItemModal";
import { FetchedData } from "./interfaces";
import {fetchingDataFiltered, fetchingDataPaginated, fetchingMainPageData, checkError} from './api-methods';
import {connectionError, noIDError} from './stringResources';


const App: React.FC = () => {
    const [pageData, setPageData] = useState<FetchedData[]>([]);
    const [pageNumberFromApi, setPageNumberFromApi] = useState<number>(1);
    const [totalPagesFromApi, setTotalPagesFromApi] = useState<any>();
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [dataForModal, setDataForModal]= useState<any>();
    const [errorMessage, setErrorMessage]= useState<any>();


    useEffect(()  : void => {
        fetchingMainPageData()
            .then (checkError)
            .then ((responseBody: any) => {
                setPageData(responseBody.data);
            })
            .catch( (error) => {
                setErrorMessage(connectionError)
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
            .then (checkError)
            .then ((responseBody: any) => {
                    setPageData([responseBody.data].flat())
                    setErrorMessage('')
            })
            .catch ((error) => {
                    setErrorMessage(noIDError)
        })
    }

    const handleNext = () : void => {
        let newPageNumber : number = pageNumber + 1;
        setPageNumber(newPageNumber)
        fetchingDataPaginated(newPageNumber)
            .then (checkError)
            .then ((responseBody) => {
                setPageData(responseBody.data)
                setPageNumberFromApi(responseBody.page);
                setTotalPagesFromApi(responseBody.total_pages);
            })
            .catch( (error) => {
                setErrorMessage(connectionError)
            })
    }

    const handlePrev = () : void => {
        let newPageNumber : number = pageNumber - 1;
        setPageNumber(newPageNumber)
        fetchingDataPaginated(newPageNumber)
            .then (checkError)
            .then ((responseBody) => {
                setPageData(responseBody.data)
                setPageNumberFromApi(responseBody.page);
                setTotalPagesFromApi(responseBody.total_pages);
            })
            .catch( (error) => {
                setErrorMessage(connectionError)
            })
    }

    const modalOpen = (item: {}) : void => {
        setIsModalOpen(true);
        setDataForModal(item);
    }
    const onClose = () => setIsModalOpen(false);

    return (
        <Container sx={{width: 700, mt: 5}}>
            <Typography>{errorMessage}</Typography>
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
            <ItemModal
                isOpen={isModalOpen}
                onClose={onClose}
                dataForModal={dataForModal}/>
        </Container>
    )
}

export default App;