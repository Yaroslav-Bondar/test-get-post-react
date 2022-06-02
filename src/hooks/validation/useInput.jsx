import {useState} from 'react';
import {useValidation} from './useValidation';

const useInput = (initialValue, id, validations) => {
    const [value, setValue] = useState(initialValue);
    // exit state of the input
    const [isDirty, setDirty] = useState(false);
    const [isFocus, setIsFocus] = useState(false);
    // const [helpMessages, setHelpMessages] = useState(messages.help.id);
    const valid = useValidation(value, validations);
    console.log('valid', valid); 
    const onChange = (e) => {
        // console.log('onChange');
        setValue(e.target.value);
    }
    
    const onBlur = (e) => {
        setIsFocus(false);
        // console.log('focus lost');
        // setDirty(true);
    }

    const onFocus = (e) => {
        setIsFocus(true);
        // console.log('Focus');
    }

    return {
        id: id,
        handlers: {
            onChange,
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