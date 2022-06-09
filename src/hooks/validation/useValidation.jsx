import {useState, useEffect} from 'react';
import {checkInputValid} from '../../services/validation/validation'; 
import {checkImageDimensions} from '../../services/validation/checkImageDimensions';

const useValidation = (value, fileValue, validations) => {
    // errors for a specific input field
    const [inputErrors, setInputErrors] = useState(null);
    // is input field valid 
    const [inputValid, setInputValid] = useState(false);

    useEffect(() => {
        const errors = {};
        (async () => {
            for (const validation in validations) {
                switch (validation) {
                    case 'minLength':
                        if(value.length < validations[validation]) {
                            errors.minLengthError = true;
                        } else {
                            errors.minLengthError = false;
                        }
                        break;
                    case 'isEmpty':
                        if(value) {
                            errors.isEmptyError = false;
                        } else {
                            errors.isEmptyError = true;
                        }
                        break;
                    case 'maxLength':
                        if(value.length > validations[validation]) {
                            errors.maxLengthError = true;
                        } else {
                            errors.maxLengthError = false;
                        }
                        break;
                    case 'pattern':
                        if(validations[validation].test(value.toLowerCase())) {
                            errors.patternError = false;
                        } else {
                            errors.patternError = true;
                        }
                        break;
                    case 'isFileEmpty': 
                        if(fileValue) {
                            errors.isFileEmptyError = false;
                        } else {
                            errors.isFileEmptyError = true;
                        }
                        break;    
                    case 'imageDimensions':
                        if(!fileValue) {
                            errors.imageDimensionsError = false;
                            break;
                        } 
                        const isImageDimensions = await checkImageDimensions(validations, fileValue);
                        if(isImageDimensions) {
                            errors.imageDimensionsError = true;
                        } else {
                            errors.imageDimensionsError = false;
                        }
                        break;
                    case 'fileType': 
                        if(!fileValue) {
                            errors.fileTypeError = false;               
                            break;
                        }
                        const isType = validations[validation].includes(fileValue.type);  
                        if(isType) {
                            errors.fileTypeError = false;               
                        } else {
                            errors.fileTypeError = true;
                        }
                        break;
                    case 'fileSize':
                        if(!fileValue) {
                            errors.fileSizeError = false;
                            break;
                        }
                        if(fileValue.size > validations[validation]) {
                            errors.fileSizeError = true;
                        } else {
                            errors.fileSizeError = false;
                        }
                        break;
                }
            }
            // set error names and values for input
            setInputErrors(errors);
            // set validation status for input
            setInputValid(checkInputValid(errors)); 
        })();
    }, [value, fileValue]);

    return {
        errors: {...inputErrors},
        state: {inputValid},
    }
}

export {useValidation};