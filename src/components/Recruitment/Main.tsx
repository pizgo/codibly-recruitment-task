import React, {useEffect, useState} from "react";
import IdFilter from "./IdFilter";
import ProductList from "./ProductList";
import PaginateButtons from "./PaginateButtons";
import Modal from "./Modal";
import ModalContent from "./ModalContent";
import { fetchedData } from "./interfaces";

const Main: React.FC = () => {
    const [pageData, setPageData] = useState<fetchedData[]>([]);
    const [pageNumberFromApi, setPageNumberFromApi] = useState<number>(1);
    const [totalPagesFromApi, setTotalPagesFromApi] = useState<any>();
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [indexForModal, setIndexForModal]= useState<any>();

    useEffect(() => {
        fetch(`https://reqres.in/api/products/?page=${pageNumber}&per_page=5`,
        )
            .then ((response) => response.json())
            .then ((responseBody) => {
                setPageData(responseBody.data);
                console.log(responseBody)
            })
    }, [])


    const handleNext = () => {
        let newPageNumber = pageNumber + 1;
        setPageNumber(newPageNumber)
        fetch(`https://reqres.in/api/products/?page=${newPageNumber}&per_page=5`,
        )
            .then ((response) => response.json())
            .then ((responseBody) => {
                setPageData(responseBody.data)
                setPageNumberFromApi(responseBody.page);
                setTotalPagesFromApi(responseBody.total_pages);
            })
    }

    const handlePrev = () => {
        let newPageNumber = pageNumber - 1;
        setPageNumber(newPageNumber)
        fetch(`https://reqres.in/api/products/?page=${newPageNumber}&per_page=5`,
        )
            .then ((response) => response.json())
            .then ((responseBody) => {
                setPageData(responseBody.data)
                setPageNumberFromApi(responseBody.page);
                setTotalPagesFromApi(responseBody.total_pages);
            })
    }

    const setIndex = (event: React.MouseEvent<HTMLTableRowElement>) => {
        return setIndexForModal(indexForModal)

    }

    const modalOpen = (item: {}) => {
        setIsModalOpen(true);
        console.log(item)
    }
    const onClose = () => setIsModalOpen(false);

    return (
        <>
            <IdFilter/>
            <ProductList
                pageData={pageData}
                modalOpen = {modalOpen}
                //setIndex={setIndex}
            />
            <PaginateButtons
                handleNext = {handleNext}
                handlePrev = {handlePrev}
                pageNumberFromApi = {pageNumberFromApi}
                totalPagesFromApi = {totalPagesFromApi}
                pageData={pageData}/>
            <Modal
                isOpen={isModalOpen}
                onClose={onClose}
                >
                    <ModalContent/>
            </Modal>
        </>
    )
}

export default Main;