import React from "react";
import Input from '@mui/material/Input'

interface IdFilterProps {
    filterId: (enteredId: string) => void;
}

const IdFilter: React.FC<IdFilterProps> = (props) => {

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        const enteredId = event.currentTarget.value;
        props.filterId(enteredId)
    }

    return (
        <form>
            <input
                type='number'
                placeholder='type the ID'
                onChange={handleChange}
                />
        </form>
    )
}

export default IdFilter;