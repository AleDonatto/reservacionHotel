import { useState } from "react"

export const useForm = (initialstate = {}) => {

    const [values, setvalues] = useState(initialstate)

    const reset = () => {
        setvalues(initialstate);
    }

    const handleInputChages = ({target}) => {
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setvalues({
            ...values,
            [ name ]: value
        })
    }

    return [values, handleInputChages, reset]
    
}