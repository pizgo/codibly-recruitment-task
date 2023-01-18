import React from "react";
import { FetchedData } from "../types/interfaces";
import {Container, Button } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

interface PaginateButtonsProps  {
    handlePrev: () => void;
    handleNext: () => void;
    filteredId: string;
    pageNumberFromApi: number;
    totalPagesFromApi: number;
    pageData: FetchedData[];
}

const PaginateButtons: React.FC<PaginateButtonsProps> = props => {


    return (
        <Container sx={{display: 'flex',
                        justifyContent: 'space-between',
                        mt: 2}}>
            <Button
                    startIcon={<ArrowBackIosNewIcon/>}
                    variant='contained'
                    sx={{ visibility: ((props.pageNumberFromApi !== 1) &&
                            (!props.filteredId)) ? 'visible' : 'hidden'}}
                    onClick={props.handlePrev}/>
            <Button
                    startIcon={<ArrowForwardIosIcon/>}
                    variant='contained'
                    sx={{ visibility: (props.totalPagesFromApi !== props.pageNumberFromApi) ? 'visible' : 'hidden'}}
                    onClick={props.handleNext}/>
        </Container>
     )
}

export default PaginateButtons;