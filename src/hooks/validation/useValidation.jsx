import {useState, useEffect} from 'react';

const useValidation = (value, validations) => {
    // errors state
    const [isEmptyError, setIsEmptyError] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [patternError, setPatternError] = useState(false);
    // const [emailError, setEmailError] = useState(false);
    const [inputErrors, setInputErrors] = useState({});
    const [inputValid, setInputValid] = useState(false);
    const [formValid, setFormValid] = useState(false);

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
                        setIsEmptyError(false);
                        errors.isEmptyError = false;
                    } else {
                        errors.isEmptyError = true;
                        setIsEmptyError(true);
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

                case 'pattern':
                    if(validations[validation].test(value.toLowerCase())) {
                        setPatternError(false);
                        errors.patternError = false;
                    } else {
                        setPatternError(true);
                        errors.patternError = true;
                    }
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
        if(isEmptyError || minLengthError || maxLengthError || patternError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [isEmptyError, minLengthError, maxLengthError, patternError]);
    
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