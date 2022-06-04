import {useState, useEffect} from 'react';
import {checkImageDimensions} from '../../services/validation/checkImageDimensions';

const useValidation = (value, fileValue, validations) => {
    // errors state
    const [isEmptyError, setIsEmptyError] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [patternError, setPatternError] = useState(false);
    const [imageDimensionsError, setImageDimensionsError] = useState(false);
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
                case 'imageDimensions':
                    (async () => {
                        const isImageDimensions = await checkImageDimensions(validations, fileValue);
                        if(isImageDimensions) {
                            setImageDimensionsError(true);
                            errors.imageDimensionsError = true;
                        } else {
                            setImageDimensionsError(false);
                            errors.imageDimensionsError = false;
                        }
                    })();
                    break;    
            }
        }
        setInputErrors(errors);
    }, [value, fileValue]);

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
        if(isEmptyError || minLengthError || maxLengthError || patternError || imageDimensionsError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [isEmptyError, minLengthError, maxLengthError, patternError, imageDimensionsError]);
    
    return {
        errors: {...inputErrors},
        state: {    inputValid,
                    formValid,
                },
    }
}

export {useValidation};