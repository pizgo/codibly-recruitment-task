import React, { useState } from "react";
import {
    Container,
    Alert,
    CircularProgress,
    Box } from "@mui/material/";
import ProductSearchField from "./components/ProductSearchField";
import ProductList from "./components/ProductList";
import PaginateButtons from "./components/PaginateButtons";
import SingleProduct from "./components/SingleProduct";
import { Product } from "./types/types";
import { searchParams } from './consts/urlParams';
import { useFetchProducts } from "./hooks/useFetchProducts";
import { useUserInteracted } from "./hooks/useUserInteracted";

const App: React.FC = () => {
    const initialProductId = searchParams.get("id") || "";
    const initialPageNumber = Number(searchParams.get("page")) || 1;

    const { productsState, callForData } = useFetchProducts(initialProductId, initialPageNumber);
    const {  filteredId, pageNumber, handleInteraction } = useUserInteracted(initialPageNumber, initialProductId, callForData)

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [chosenProduct, setChosenProduct]= useState<Product>();

    const handleFilterIdChange = (enteredId : string) : void => {
        handleInteraction(1, enteredId)
    };

    const handleArrowClick = (dir: "prev" | "next") => {
        const newPageNumber : number =
            dir === "next" ? pageNumber + 1 : pageNumber - 1;
        handleInteraction(newPageNumber, filteredId)
    };

    const handleChooseProduct = (item: Product) : void => {
            setIsModalOpen(true);
            setChosenProduct(item);
    };

    const handleCloseModal = () => setIsModalOpen(false);

    if (productsState.status === "INITIAL") {
        return  (
            <Box sx={{display: 'flex', justifyContent: "center"}}>
                <div>Loading...</div>
            </Box>
        )
    }
    else if (productsState.status === "ERROR") {
        return (
            <Container maxWidth="sm" sx={{ mt: 5 }}>
                <ProductSearchField
                    onChangeInput={handleFilterIdChange}
                    value={filteredId}/>
                {productsState.error.message && (
                    <Alert severity="error" sx={{ mt: 4 }}>
                        {productsState.error.message}
                    </Alert>
                )}
            </Container>
            )
    }
    else {
        return (
            <Container maxWidth="sm" sx={{mt: 5}}>
                <ProductSearchField
                    onChangeInput= {handleFilterIdChange}
                    value={filteredId}/>
                <ProductList
                    products={productsState.payload.data}
                    onChooseProduct= {handleChooseProduct}/>
                <PaginateButtons
                    onHandleNext= {() => handleArrowClick("next")}
                    onHandlePrev= {() => handleArrowClick("prev")}
                    filteredId={filteredId}
                    pageNumberFromApi = {pageNumber}
                    totalPagesFromApi = {productsState.payload.total_pages}/>
                <SingleProduct
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    product={chosenProduct}/>
            </Container>
        )
    }
};

export default App;