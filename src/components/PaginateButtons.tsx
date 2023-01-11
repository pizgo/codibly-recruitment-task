import React from "react";
import { FetchedData } from "../interfaces";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

interface PaginateButtonsProps  {
    handlePrev: () => void;
    handleNext: () => void;
    pageNumberFromApi: number;
    totalPagesFromApi: number;
    pageData: FetchedData[];
}
const PaginateButtons: React.FC<PaginateButtonsProps> = props => {

    const isNotFirstPage = (props.pageNumberFromApi !== 1);
    const isNotLastPage = (props.totalPagesFromApi !== props.pageNumberFromApi);

    return (
         <>
             {isNotFirstPage && <Button
                                    variant='contained'
                                    startIcon={<ArrowBackIosNewIcon/>}
                                    onClick={props.handlePrev}/>}
             {isNotLastPage && <Button
                                    variant='contained'
                                    startIcon={<ArrowForwardIosIcon/>}
                                    onClick={props.handleNext}/>}

         </>
     )
}

export default PaginateButtons;