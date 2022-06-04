import {useState} from 'react';
import {useValidation} from './useValidation';

const useInput = (initialValue, id, validations) => {
    const [value, setValue] = useState(initialValue);
    // exit state of the input
    const [isDirty, setDirty] = useState(false);
    const [isFocus, setIsFocus] = useState(false);
    const [fileValue, setFileValue] = useState(initialValue);
    // input validation
    const valid = useValidation(value, fileValue, validations);
    console.log('valid', valid); 
    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onChangeFile = (e) => {
        setFileValue(e.target.files[0]);
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
        },
        state: {
            isDirty,
            isFocus,
            ...valid.state,
        },
        errors: {
            ...valid.errors,
        },
    }
}

export {useInput};