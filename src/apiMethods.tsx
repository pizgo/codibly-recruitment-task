import {
    APIEndpoint,
    APIParams,
    itemsPerPage,
    connectionError,
    noIDError } from "./stringResources";


const fetchingData = (params: {}) : Promise<Response> => {
    return fetch(APIEndpoint + new URLSearchParams(params))
}

export const fetchData = (params: {
    id : string,
    page : number }) : Promise<Response> => {
    return fetchingData({...params, per_page: itemsPerPage})
}

export const checkError = (response: Response) => {
    if (response.status === 404) {
        throw Error(noIDError )
    }  else if  (response.status >= 400){
        throw Error(connectionError)
    } else {
        return response.json();
    }
}



