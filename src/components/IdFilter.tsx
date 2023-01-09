import React, {useRef} from "react";

interface IdFilterProps {
    filterId: (enteredId: any) => void;
}

const IdFilter: React.FC<IdFilterProps> = (props) => {

//jesli nie ma takiego id - non Id found
    const idInputRef = useRef<HTMLInputElement>(null);

    const handleChange = (event: React.ChangeEvent) => {
        const enteredId = idInputRef.current!.value;
        props.filterId(enteredId)
    }

    return (
        <form>
            <input
                type='text'
                placeholder='provide the product ID'
                ref={idInputRef}
                onChange={handleChange}
                />
        </form>
    )
}

export default IdFilter;