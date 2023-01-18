import React from "react";
import { Container, Input } from "@mui/material";

interface IdFilterProps {
    filterId: (enteredId: string) => void;
    value: string;
}

const style = {
    border: 1,
    p: 1,
    borderRadius: "4px",
    outline: "none"
}

const IdFilter: React.FC<IdFilterProps> = (props) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const enteredId = event.target.value;
        //zablokowanie e
        // if (enteredId === 'e') {
        //     return;
        // }
        props.filterId(enteredId)
    }



    return (
        <Container sx={{display: 'flex', justifyContent: 'center'}}>
            <form>
                <Input
                    sx = {style}
                    type='number'
                    value={props.value}
                    id="outlined-number"
                    placeholder="type the product's ID"
                    onChange={handleChange}
                />
            </form>
        </Container>
    )
}

export default IdFilter;