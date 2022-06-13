import {useState, useEffect} from 'react';
import {checkInputValid} from '../../services/validation/validation'; 
import {checkImageDimensions} from '../../services/validation/checkImageDimensions';

/**
 * data validation in accordance with the passed validation request
 * @param {object, string} value - validated value. value type depending on input type. 
 *                                  For example <input type="file"> or <input type="text">
 * @param {object} validations - validation request. An object whose keys are the names of the validation type, 
                                the values are the values for validation
    @returns {object} -  validation results. Object with error status and validity for a particular input field
 */
const useValidation = (value, validations) => {
    // errors for a specific input field
    const [inputErrors, setInputErrors] = useState(null);
    // is input field valid 
    const [inputValid, setInputValid] = useState(false);

    useEffect(() => {
        const errors = {};
        // input validation
        (async () => {
            for (const validation in validations) {
                switch (validation) {
                    case 'minLength':
                        errors.minLengthError = value.length < validations[validation];
                        break;
                    case 'isEmpty':
                        errors.isEmptyError = value.length === 0; 
                        break;
                    case 'maxLength':
                        errors.maxLengthError = value.length > validations[validation]
                        break;
                    case 'pattern':
                        errors.patternError = !validations[validation].test(value.toLowerCase()); 
                        break;
                    case 'isFileEmpty': 
                        if(value) {
                            errors.isFileEmptyError = false;
                        } else {
                            errors.isFileEmptyError = true;
                        }
                        break;    
                    case 'imageDimensions':
                        if(!value) {
                            errors.imageDimensionsError = false;
                            break;
                        } 
                        errors.imageDimensionsError = await checkImageDimensions(validations, value);
                        break;
                    case 'fileType': 
                        if(!value) {
                            errors.fileTypeError = false;               
                            break;
                        }
                        errors.fileTypeError = !validations[validation].includes(value.type); 
                        break;
                    case 'fileSize':
                        if(!value) {
                            errors.fileSizeError = false;
                            break;
                        }
                        errors.fileSizeError = value.size > validations[validation];
                        break;
                }
            }
            // set error names and values for input
            setInputErrors(errors);
            // set validation status for input
            setInputValid(checkInputValid(errors)); 
        })();
    }, [value]);

    return {
        errors: {...inputErrors},
        state: {inputValid},
    }
}

export {useValidation};