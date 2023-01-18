import { useEffect, useState } from "react";
import { FetchedProductSuccess } from "../types/interfaces";
import {checkError, fetchData} from "../utils/apiMethods";

export const useFetchProducts = (
    initialId: string,
    initialPageNumber: number
) => {
    const [productsState, setProducts] = useState<FetchedProductSuccess>();
    const [errorMessage, setErrorMessage] = useState<string>("");

    const callForData = ( id: string, page: number ) => {
        fetchData( {id, page})
            .then (checkError)
            .then ((responseBody) => {
                setProducts(responseBody);
                setErrorMessage("")
            })
            .catch( (error) => {
                setErrorMessage(error.message)
            });
    };

    useEffect(()  : void => {
        callForData(initialId, initialPageNumber);
    }, [initialId, initialPageNumber]);

    return { productsState: productsState, errorMessage, callForData}
}