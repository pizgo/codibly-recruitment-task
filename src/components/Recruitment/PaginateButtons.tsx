import React, {useEffect} from "react";

interface PaginateButtonsProps  {
    handlePrev: () => void;
    handleNext: () => void;
}
const PaginateButtons: React.FC<PaginateButtonsProps> = props => {


    return (
         <>
             <button onClick={props.handlePrev}>Prev</button>
             <button onClick={props.handleNext}>Next</button>
         </>
     )
}

export default PaginateButtons;