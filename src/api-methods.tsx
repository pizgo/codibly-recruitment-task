import {APIParams} from "./stringResources";

let APIEndpoint: string =  'https://reqres.in/api/products/?'

const fetchingData = (params: {}) : Promise<Response> => {
    return fetch(APIEndpoint + new URLSearchParams(params))
}

export const fetchingMainPageData = () : Promise<Response> => {
    return fetchingData({[APIParams.perPage] : 5 })
}

export const fetchingDataFiltered = (id : string) : Promise<Response> => {
    return fetchingData({[APIParams.id] : id })
}

export const fetchingDataPaginated = (pageNumber: number) : Promise<Response> => {
    return fetchingData({[APIParams.page] : pageNumber, [APIParams.perPage] : 5 })
}

export const checkError = (response: Response) => {
    if (response.status >= 400) {
        throw Error(response.statusText)
    } else {
        return response.json();
    }
}



