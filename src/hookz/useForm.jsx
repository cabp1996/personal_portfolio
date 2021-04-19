import { useState } from 'react';

export const useForm = (initialState = {}, errorMessages = {}) => {

    const [formValues, setFormValues] = useState(initialState);
    const [formErrors, setFormErrors] = useState(errorMessages);

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const reset = () => {
        setFormValues(initialState)
    }

    const setErrors = (errors) => {
        setFormErrors(errors);
    }



    return [formValues, formErrors, handleInputChange, reset, setErrors];
}
