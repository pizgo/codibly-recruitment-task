import React, {useEffect, useState} from "react";
import {Container, Alert} from "@mui/material/";
import ProductSearchField from "./components/ProductSearchField";
import ProductList from "./components/ProductList";
import PaginateButtons from "./components/PaginateButtons";
import ItemModal from "./components/ItemModal";
import { Product } from "./types/interfaces";
import { fetchData, checkError} from './utils/apiMethods';
import { paramToUrl } from './consts/urlParams';
import {useNavigateSearch} from "./hooks/UseNavigateSearch";

const App: React.FC = () => {
    const [pageData, setPageData] = useState<Product[]>([]);
    const [filteredId, setFilteredId] = useState<string>(paramToUrl.get("id") ? ("" + paramToUrl.get('id')) : "")
    const [pageNumberFromApi, setPageNumberFromApi] = useState<number>(1);
    const [totalPagesFromApi, setTotalPagesFromApi] = useState<any>();
    const [pageNumber, setPageNumber] = useState<number>( paramToUrl.get("page") ? parseInt("" + paramToUrl.get('page')) : 1)
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [chosenProduct, setChosenProduct]= useState<Product>();
    const [errorMessage, setErrorMessage]= useState<any>();
    const navigateSearch = useNavigateSearch()

    const callForData = ( id: string, page: number ) => {
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
       callForData(filteredId, pageNumber)
    }, [])

    const handleFilterIdChange = (enteredId : string) : void => {
        setFilteredId(enteredId);
        setPageNumber(1);
        setPageNumberFromApi(1)
        navigateSearch(enteredId, pageNumber)
        callForData(enteredId, 1);
    }

    const handleArrowClick = (dir: "prev" | "next") => {
        const newPageNumber : number =
            dir === "next" ? pageNumber + 1 : pageNumber - 1;
        setPageNumber(newPageNumber);
        navigateSearch(filteredId, newPageNumber)
        callForData(filteredId, newPageNumber)
    }

    const handleChooseProduct = (item: Product) : void => {
            setIsModalOpen(true);
            setChosenProduct(item);
    }
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <Container maxWidth="sm" sx={{mt: 5}}>
            {errorMessage &&
                <Alert severity='error'
                    sx={{mb: 3}}>
                    {errorMessage}</Alert>}
            <ProductSearchField onChangeInput= {handleFilterIdChange}
                                value={filteredId}/>
            {!isError && <ProductList
                pageData={pageData}
                modalOpen = {handleChooseProduct}/>}
            {!errorMessage && <PaginateButtons
                onHandleNext= {() => handleArrowClick("next")}
                onHandlePrev= {() => handleArrowClick("prev")}
                filteredId={filteredId}
                pageNumberFromApi = {pageNumberFromApi}
                totalPagesFromApi = {totalPagesFromApi}/>}
            <ItemModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                dataForModal={chosenProduct}/>
        </Container>
    )
}

export default App;