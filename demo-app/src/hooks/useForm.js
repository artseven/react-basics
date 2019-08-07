import { useState } from 'react';

export const useForm = (initialForm) => {
    
    const [ form, setForm ] = useState(initialForm);//initial state data

    const change = ({ target }) => {
        setForm({
            //spread operator
            ...form,
            //looks into name on the input field
            //ternary operator to check field type
            //to make sure number field type returns number and not a string
            [ target.name ]: target.type === 'number' ? Number(target.value) : target.value,            
        });
    };
    /*
    *  0 - form data
    *  1 - change function for input controls
    *  2 - reset the form function
    */
    return [ form, change, () => setForm(initialForm)];
}