import {useState, useEffect} from 'react';
import {checkImageDimensions} from '../../services/validation/checkImageDimensions';

const useValidation = (value, fileValue, validations) => {
    // errors state
    const [isEmptyError, setIsEmptyError] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [patternError, setPatternError] = useState(false);
    const [imageDimensionsError, setImageDimensionsError] = useState(false);
    const [fileTypeError, setFileTypeError] = useState(false);
    const [fileSizeError, setFileSizeError] = useState(false);
    const [inputErrors, setInputErrors] = useState({}); // *
    const [inputValid, setInputValid] = useState(false);
    const [formValid, setFormValid] = useState(false);

    const errors = {};

    useEffect(() => {
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
                // case 'imageDimensions':
                //     if(!fileValue) break;
                //     (async () => {
                //         const isImageDimensions = await checkImageDimensions(validations, fileValue);
                //         console.log('isImageDimensions', isImageDimensions);
                //         if(isImageDimensions) {
                //             setImageDimensionsError(true);
                //             errors.imageDimensionsError = true;
                //         } else {
                //             setImageDimensionsError(false);
                //             errors.imageDimensionsError = false;
                //         }
                //     })();
                //     break;
                case 'fileType': 
                    if(!fileValue) break;
                    const isFileType = validations[validation].includes(fileValue.type);  
                    if(isFileType) {
                        setFileTypeError(false);
                        errors.fileTypeError = false;               
                    } else {
                        setFileTypeError(true);
                        errors.fileTypeError = true;
                    }
                    break;
                case 'fileSize':
                    if(!fileValue) break;
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
        setInputErrors(errors);
    }, [value, fileValue]);

    // check image dimensions
    useEffect(() => {
        if(!fileValue) return;
        if(!'imageDimensions' in validations) return; 
        (async () => {
            const isImageDimensions = await checkImageDimensions(validations, fileValue);
            console.log('isImageDimensions', isImageDimensions);
            if(isImageDimensions) {
                setImageDimensionsError(true);
                errors.imageDimensionsError = true;
            } else {
                setImageDimensionsError(false);
                errors.imageDimensionsError = false;
            }
        })();
    }, [fileValue]);

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
        if(isEmptyError || minLengthError || maxLengthError || patternError || imageDimensionsError || fileTypeError || fileSizeError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [isEmptyError, minLengthError, maxLengthError, patternError, imageDimensionsError, fileTypeError, fileSizeError]);
    
    return {
        errors: {...inputErrors},
        state: {    inputValid,
                    formValid,
                },
    }
}

export {useValidation};