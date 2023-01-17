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