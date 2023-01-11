import React from "react";
import { FetchedData } from "../interfaces";
import {Button, ButtonGroup, makeStyles } from "@mui/material";
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
        <div>
            {isNotFirstPage && <Button
                    startIcon={<ArrowBackIosNewIcon/>}
                    style={{marginRight: '20px'}}
                    variant='contained'
                    onClick={props.handlePrev}/>}
            {isNotLastPage && <Button
                    startIcon={<ArrowForwardIosIcon/>}
                    variant='contained'
                    onClick={props.handleNext}/>}
        </div>
     )
}

export default PaginateButtons;