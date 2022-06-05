import {useState, useEffect} from 'react';
import {checkImageDimensions} from '../../services/validation/checkImageDimensions';

const useValidation = (value, fileValue, validations) => {
    // single errors 
    const [isEmptyError, setIsEmptyError] = useState(true);
    const [isFileEmptyError, setIsFileEmptyError] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [patternError, setPatternError] = useState(false);
    const [imageDimensionsError, setImageDimensionsError] = useState(false);
    const [fileTypeError, setFileTypeError] = useState(false);
    const [fileSizeError, setFileSizeError] = useState(false);
    // group errors
    const [inputErrors, setInputErrors] = useState({});
    const [inputValid, setInputValid] = useState(false);
    // const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        const errors = {};
        (async () => {
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
                    case 'isFileEmpty': 
                        if(fileValue) {
                            setIsFileEmptyError(false);
                            errors.isFileEmptyError = false;
                        } else {
                            setIsFileEmptyError(true);
                            errors.isFileEmptyError = true;
                        }
                        break;    
                    case 'imageDimensions':
                        if(!fileValue) {
                            // set error names and values for input
                            errors.imageDimensionsError = false;
                            break;
                        } 
                        const isImageDimensions = await checkImageDimensions(validations, fileValue);
                        // console.log('isImageDimensions', isImageDimensions);
                        if(isImageDimensions) {
                            setImageDimensionsError(true);
                            errors.imageDimensionsError = true;
                        } else {
                            setImageDimensionsError(false);
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
                            setFileTypeError(false);
                            errors.fileTypeError = false;               
                        } else {
                            setFileTypeError(true);
                            errors.fileTypeError = true;
                        }
                        break;
                    case 'fileSize':
                        if(!fileValue) {
                            errors.fileSizeError = false;
                            break;
                        }
                        if(fileValue.size > validations[validation]) {
                            setFileSizeError(true);
                            errors.fileSizeError = true;
                        } else {
                            setFileSizeError(false);
                            errors.fileSizeError = false;
                        }
                        break;
                }
            }
            // set error names and values for input
            setInputErrors(errors);
            // set validation status for input
            const errorsValue = Object.values(errors);
            if(!errorsValue.includes(true)) {
                setInputValid(true);
            } else {
                setInputValid(false);
            }
        })();
    }, [value, fileValue]);

    // // form validation
    // useEffect(() => {
    //     if(isEmptyError || minLengthError || maxLengthError || patternError || imageDimensionsError || fileTypeError || fileSizeError || isFileEmptyError) {
    //         setFormValid(false);
    //     } else {
    //         setFormValid(true);
    //     }
    // }, [isEmptyError, minLengthError, maxLengthError, patternError, imageDimensionsError, fileTypeError, fileSizeError, isFileEmptyError]);
    
    return {
        errors: {...inputErrors},
        state: {    inputValid,
                    // formValid,
                },
    }
}

export {useValidation};