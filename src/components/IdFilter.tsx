import React from "react";
import { Container, Input } from "@mui/material";
import { inputStyle } from "../styles/styles";

interface IdFilterProps {
    filterId: (enteredId: string) => void;
}

const IdFilter: React.FC<IdFilterProps> = (props) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const enteredId = event.target.value;
        props.filterId(enteredId)
    }

    return (
        <Container sx={{display: 'flex', justifyContent: 'center'}}>
            <form>
                <Input
                    sx = {inputStyle}
                    type='number'
                    id="outlined-number"
                    placeholder="type the product's ID"
                    onChange={handleChange}
                />
            </form>
        </Container>
    )
}

export default IdFilter;