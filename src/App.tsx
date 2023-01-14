import React, {useEffect, useState} from "react";
import {Container, Alert} from "@mui/material/";
import IdFilter from "./components/IdFilter";
import ProductList from "./components/ProductList";
import PaginateButtons from "./components/PaginateButtons";
import ItemModal from "./components/ItemModal";
import { FetchedData } from "./interfaces";
import { fetchData, checkError} from './apiMethods';
// import {connectionError, noIDError} from './stringResources';


const App: React.FC = () => {
    const [pageData, setPageData] = useState<FetchedData[]>([]);
    const [id, setId] = useState<string>("")
    const [pageNumberFromApi, setPageNumberFromApi] = useState<number>(1);
    const [totalPagesFromApi, setTotalPagesFromApi] = useState<any>();
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [dataForModal, setDataForModal]= useState<any>();
    const [errorMessage, setErrorMessage]= useState<any>();


    const fetchingData = ( id: string, page: number ) => {
        fetchData( {id, page})
            .then (checkError)
            .then ((responseBody) => {
                setPageData(responseBody.data);
                setPageNumberFromApi(responseBody.page);
                setTotalPagesFromApi(responseBody.total_pages);
                setErrorMessage("")
                setIsError(false)
            })
            .catch( (error) => {
                setErrorMessage(error.message)
                setIsError(true);

            });
    };

    useEffect(()  : void => {
       fetchingData(id, pageNumber)
        console.log(pageData)
    }, [])

    const filterID = (enteredId : string) : void => {
        setId(enteredId);
        setPageNumber(1);
        fetchingData(enteredId, 1);
    }

    const handleArrowClick = (dir: "prev" | "next") => {
        const newPageNumber : number =
            dir === "next" ? pageNumber + 1 : pageNumber - 1;
        setPageNumber(newPageNumber);
        fetchingData(id, newPageNumber)
    }


    const modalOpen = (item: {}) : void => {
            setIsModalOpen(true);
            setDataForModal(item);
    }
    const onClose = () => setIsModalOpen(false);

    return (
        <Container sx={{width: 700, mt: 5}}>
            {errorMessage &&
                <Alert severity='error'
                    sx={{mb: 3}}>
                    {errorMessage}</Alert>}
            <IdFilter filterId= {filterID}/>
            {!isError && <ProductList
                pageData={pageData}
                modalOpen = {modalOpen}/>}
            {!isError &&<PaginateButtons
                handleNext = {() => handleArrowClick("next")}
                handlePrev = {() => handleArrowClick("prev")}
                pageNumberFromApi = {pageNumberFromApi}
                totalPagesFromApi = {totalPagesFromApi}
                pageData={pageData}/>}
            <ItemModal
                isOpen={isModalOpen}
                onClose={onClose}
                dataForModal={dataForModal}/>
        </Container>
    )
}

export default App;