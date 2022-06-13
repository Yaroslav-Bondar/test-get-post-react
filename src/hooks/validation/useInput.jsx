import {useState} from 'react';
import {useValidation} from './useValidation';
/**
 * returns event handlers for form inputs, and information 
 * with the results of validation of a particular field 
 * when the user enters values
 * @param {string, null or other} initialValue - initial value. value type depending on input type.
 * @param {string} id - input element id
 * @param {object} validations - validation request. An object whose keys are the names of the validation type, 
 *                               the values are the values for validation
 * @returns {object} -  test results. An object with an error status and validity for a 
 *                      specific input field, input handlers. 
 *                      Also an input id, state, and input values.
 */
const useInput = (initialValue, id, validations) => {
    const [value, setValue] = useState(initialValue);
    // exit state of the input
    const [isFocus, setIsFocus] = useState(false);
    const [fileName, setFileName] = useState('');
    // input validation
    const valid = useValidation(value, validations);
    //handlers
    const onChange = (e) => {
        setValue(e.target.value);
    }
    const onChangeFile = (e) => {
        const file = e.target.files[0]; 
        setValue(file);
        setFileName(file.name);
    }
    const onBlur = (e) => {
        setIsFocus(false);
    }
    const onFocus = (e) => {
        setIsFocus(true);
    }

    return {
        id: id,
        handlers: {
            onChange,
            onChangeFile,
            onBlur,
            onFocus,
        },
        values: {
            value, 
            fileName,
        },
        state: {
            isFocus,
            ...valid.state,
        },
        errors: {
            ...valid.errors,
        },
    }
}

export {useInput};