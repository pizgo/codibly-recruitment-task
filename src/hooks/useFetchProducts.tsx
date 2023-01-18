import { useEffect, useState } from "react";
import { FetchedProductState } from "../types/types";
import { fetchData } from "../utils/apiMethods";
import {connectionError, noIDError} from "../consts/strings";

export const useFetchProducts = (
    initialId: string,
    initialPageNumber: number) => {
    const [productsState, setProductsState] = useState<FetchedProductState>({ status: "INITIAL" });
    
    const checkError = (response: Response) => {
        if (response.status === 404) {
            throw Error(noIDError)
        } else if (response.status >= 400) {
            throw Error(connectionError)
        } else {
            return response.json();
        }
    }

    const callForData = ( id: string, page: number ) => {
        setProductsState({ status: "LOADING"})
        fetchData( {id, page})
            .then (checkError)
            .then ((responseBody) => {
                setProductsState( { status: "SUCCESS", payload: responseBody });
            })
            .catch( (error) => {
                setProductsState({ status: "ERROR", error })
            });
    };

    useEffect(()  : void => {
        callForData(initialId, initialPageNumber);
    }, [initialId, initialPageNumber]);

    return { productsState: productsState, callForData}
}