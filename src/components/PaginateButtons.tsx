import React from "react";
import {Container, Button } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

interface PaginateButtonsProps  {
    onHandlePrev: () => void;
    onHandleNext: () => void;
    filteredId: string;
    pageNumberFromApi: number;
    totalPagesFromApi?: number;
}

const PaginateButtons: React.FC<PaginateButtonsProps> = (
    {onHandlePrev, onHandleNext, filteredId, pageNumberFromApi, totalPagesFromApi}) => {

    const shouldShowPrevButton = pageNumberFromApi !== 1 && !filteredId;
    const shouldShowNextButton = totalPagesFromApi !== pageNumberFromApi && !!totalPagesFromApi;

    return (
        <Container sx={{display: 'flex', justifyContent: 'space-between', mt: 2}}>
            <div>
                {shouldShowPrevButton ? (
                    <Button
                        startIcon={<ArrowBackIosNewIcon />}
                        variant="contained"
                        onClick={onHandlePrev}
                    />
                ) : null}
            </div>
            <div>
                {shouldShowNextButton ? (
                    <Button
                        startIcon={<ArrowForwardIosIcon />}
                        variant="contained"
                        onClick={onHandleNext}
                    />
                ) : null}
            </div>
        </Container>
     )
};

export default PaginateButtons;