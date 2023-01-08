import React, {useEffect} from "react";
import { fetchedData } from "./interfaces";

interface PaginateButtonsProps  {
    handlePrev: () => void;
    handleNext: () => void;
    pageNumberFromApi: number;
    totalPagesFromApi: number;
    pageData: fetchedData[]

}
const PaginateButtons: React.FC<PaginateButtonsProps> = props => {

    //dlaczego napiejrw nie zczytuje danych
    // const lastProduct = props.pageData[props.pageData.length-1].id
    //console.log(props.pageData[0])

    const isNotLastPage = (props.totalPagesFromApi !== props.pageNumberFromApi);

    return (
         <>
             <button
                 style={{visibility: (props.pageNumberFromApi !== 1) ? 'visible' : 'hidden'}}
                 onClick={props.handlePrev}>Prev</button>
             <button
                 style={{visibility: isNotLastPage ? 'visible' : 'hidden'}}
                 onClick={props.handleNext}>Next</button>
         </>
     )
}

export default PaginateButtons;