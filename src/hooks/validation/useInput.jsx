import {useState} from 'react';
import {useValidation} from './useValidation';

const useInput = (initialValue, id, validations) => {
    const [value, setValue] = useState(initialValue);
    // exit state of the input
    const [isFocus, setIsFocus] = useState(false);
    const [fileName, setFileName] = useState('');
    // input validation
    const valid = useValidation(value, validations);
    console.log('valid', valid); 
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