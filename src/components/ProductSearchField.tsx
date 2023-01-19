import React from "react";
import {
    Container,
    Input } from "@mui/material";

const style = {
    border: 1,
    p: 1,
    borderRadius: "4px",
    outline: "none"
}

interface IdFilterProps {
    onChangeInput: (enteredId: string) => void;
    value: string;
}

const ProductSearchField: React.FC<IdFilterProps> = ({ onChangeInput, value }) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const enteredId = event.target.value;
        onChangeInput(enteredId)
    }

    return (
        <Container sx={{display: 'flex', justifyContent: 'center'}}>
            <form>
                <Input
                    sx = {style}
                    type='number'
                    value={value}
                    id="outlined-number"
                    placeholder="type the product's ID"
                    onChange={handleChange}/>
            </form>
        </Container>
    )
};

export default ProductSearchField;