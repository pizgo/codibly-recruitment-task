const APIParamPerPage = "per_page";
const APIParamId = 'id';
const APIParamPage = 'page';

let APIEndpoint: string =  'https://reqres.in/api/products/?'

const fetchingData = (params: {}) : Promise<Response> => {
    return fetch(APIEndpoint + new URLSearchParams(params))
}

export const fetchingMainPageData = () : Promise<Response> => {
    return fetchingData({[APIParamPerPage] : 5 })
}

export const fetchingDataFiltered = (id : string) : Promise<Response> => {
    return fetchingData({[APIParamId] : id })
}

export const fetchingDataPaginated = (pageNumber: number) : Promise<Response> => {
    return fetchingData({[APIParamPage] : pageNumber, [APIParamPerPage] : 5 })
}





