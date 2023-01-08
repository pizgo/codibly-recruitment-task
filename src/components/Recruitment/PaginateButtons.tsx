import React, {useEffect} from "react";

interface PaginateButtonsProps  {
    handlePrev: () => void;
    handleNext: () => void;
    pageNumberFromApi: number;
    totalFromApi: number;
    pageData: {
        id: string,
        name: string,
        year: number,
        color: string,
        pantone_value: string
    }[];
}
const PaginateButtons: React.FC<PaginateButtonsProps> = props => {

    const lastProducts = props.pageData.id[props.pageData.length - 1];


    return (
         <>
             <button
                 style={{visibility: (props.pageNumberFromApi !== 1) ? 'visible' : 'hidden'}}
                 onClick={props.handlePrev}>Prev</button>
             <button
                 style={{visibility: (props.totalFromApi !== lastProducts ) ? 'visible' : 'hidden'}}
                 onClick={props.handleNext}>Next</button>
         </>
     )
}

export default PaginateButtons;