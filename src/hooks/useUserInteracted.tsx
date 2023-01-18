import { useState } from "react";
import { useNavigateSearch } from "./useNavigateSearch";

export const useUserInteracted = (
    initialPageNumber: number,
    initialProductId: string,
    callForData: (id: string, page: number) => void) => {
    const [pageNumber, setPageNumber] = useState<number>(initialPageNumber)
    const [filteredId, setFilteredId] = useState<string>(initialProductId)
    const navigateSearch = useNavigateSearch()

    const handleInteraction = (newPageNumber : number, filteredId : string ) => {
        setPageNumber(newPageNumber);
        setFilteredId(filteredId)
        navigateSearch(filteredId, newPageNumber)
        callForData(filteredId, newPageNumber)
    }

    return { filteredId, pageNumber, handleInteraction}
}