
let APIEndpoint: string =  'https://reqres.in/api/products/?'

export const fetchingData = (params: {}) : Promise<Response> => {
    return fetch(APIEndpoint + new URLSearchParams(params))
}


