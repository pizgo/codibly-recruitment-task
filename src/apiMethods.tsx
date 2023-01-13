import {APIParams, connectionError, noIDError, itemsPerPage} from "./stringResources";

const APIEndpoint: string =  'https://reqres.in/api/products/?'

const fetchingData = (params: {}) : Promise<Response> => {
    return fetch(APIEndpoint + new URLSearchParams(params))
}

export const fetchingMainPageData = () : Promise<Response> => {
    return fetchingData({[APIParams.perPage] : itemsPerPage })
}

export const fetchingDataFiltered = (id : string) : Promise<Response> => {
    return fetchingData({[APIParams.id] : id })
}

export const fetchingDataPaginated = (pageNumber: number) : Promise<Response> => {
    return fetchingData({[APIParams.page] : pageNumber, [APIParams.perPage] : itemsPerPage })
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



