import { useNavigate } from "react-router-dom";

export const useNavigateSearch = () => {
    const navigate = useNavigate()
    return (id : string, page: number) => {
        navigate({
            pathname: "",
            search: (id) ? `?id=${id}` : `?page=${page}`
        })
    }
}

//uogólnić hooka i zrobić np listę argumentów, żeby móc to wielokrotnie używać