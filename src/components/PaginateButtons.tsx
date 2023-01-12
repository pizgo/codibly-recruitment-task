import React from "react";
import { FetchedData } from "../interfaces";
import {Container, Button } from "@mui/material";
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
    
    return (
        <Container sx={{display: 'flex', justifyContent: 'space-between', mt: 2}}>
            <Button
                    startIcon={<ArrowBackIosNewIcon/>}
                    variant='contained'
                    style={{ visibility: (props.pageNumberFromApi !== 1) ? 'visible' : 'hidden'}}
                    onClick={props.handlePrev}/>
            <Button
                    startIcon={<ArrowForwardIosIcon/>}
                    variant='contained'
                    style={{ visibility: (props.totalPagesFromApi !== props.pageNumberFromApi) ? 'visible' : 'hidden'}}
                    onClick={props.handleNext}/>
        </Container>
     )
}

export default PaginateButtons;