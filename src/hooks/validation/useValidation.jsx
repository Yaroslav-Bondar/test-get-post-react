import {useState, useEffect} from 'react';

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true);
    // const [isEmptyMessage, setEmptyMessage] = useState('');
    const [minLengthError, setMinLengthError] = useState(false);
    // const [minLengthMassage, setMinLengthMessage] = useState('');
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [inputErrors, setInputErrors] = useState({});
    const [inputValid, setInputValid] = useState(false);
    const [formValid, setFormValid] = useState(false);
    // const [valid]

    useEffect(() => {
        const errors = {};
        for (const validation in validations) {
            switch (validation) {

                case 'minLength':
                    if(value.length < validations[validation]) {
                        setMinLengthError(true);
                        errors.minLengthError = true;
                    } else {
                        setMinLengthError(false);
                        errors.minLengthError = false;
                    }
                    break;

                case 'isEmpty':
                    if(value) {
                        setEmpty(false);
                        errors.isEmpty = false;
                    } else {
                        errors.isEmpty = true;
                        setEmpty(true);
                    }
                    break;

                case 'maxLength':
                    if(value.length > validations[validation]) {
                        setMaxLengthError(true);
                        errors.maxLengthError = true;
                    } else {
                        errors.maxLengthError = false;
                        setMaxLengthError(false);
                    }
                    break;
                
                case 'isEmail':
                    // const re = //;
                    // if(re.test(value.toLowerCase())) {
                    //     setEmailError(false);
                    // } else {
                    //     setEmailError(true);
                    // }
                    break;
            }
        }
        // console.log('errors', errors);
        setInputErrors(errors);
    }, [value]);

    // input validation
    useEffect(() => {
        const errors = Object.values(inputErrors);
        if(!errors.includes(true)) {
            setInputValid(true);
        } else {
            setInputValid(false);
        }
    });

    // form validation
    useEffect(() => {
        if(isEmpty || minLengthError || maxLengthError || emailError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [isEmpty, minLengthError, maxLengthError, emailError]);
    
    return {
        // isEmpty,
        // minLengthError,
        // maxLengthError,
        // emailError,
        errors: {...inputErrors},
        state: {    inputValid,
                    formValid,
                },
    }
}

export {useValidation};