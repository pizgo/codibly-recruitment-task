import React, {useRef} from "react";

interface IdFilterProps {
    filterId: (enteredId: string) => void;
}

const IdFilter: React.FC<IdFilterProps> = (props) => {

//jesli nie ma takiego id - non Id found

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        const enteredId = event.currentTarget.value;
        props.filterId(enteredId)
    }

    return (
        <form>
            <input
                type='text'
                placeholder='provide the product ID'
                onChange={handleChange}
                />
        </form>
    )
}

export default IdFilter;