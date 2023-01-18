import {
    APIEndpoint,
    itemsPerPage,
} from "../consts/strings";

const fetchingData = (params: {}) : Promise<Response> => {
    return fetch(APIEndpoint + new URLSearchParams(params))
}

export const fetchData = (params: {
    id : string,
    page : number }) : Promise<Response> => {
    return fetchingData({...params, per_page: itemsPerPage})
}





