import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './InputHelper.module.scss';

const helperMessages = {
    // helpers: {
        name: {
            helper: 'should be 2-60 characters',
            label: 'user name',
        }
    // }
}

const validMessages = {
    errors : {
        minLengthError: 'too few characters entered',
        maxLengthMessage: 'too many characters', 
        isEmptyMessage: 'field can not be empty',
    },
    ...helperMessages,
}
const InputHelper = ({helper}) => {
    // console.log('validMessages', validMessages);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [isTip, setIsTip] = useState(false);
    const [tipMessage, setTipMessage] = useState('');
    
    const [isLabel, setIsLabel] = useState(false);
    const [labelMessage, setLabelMessage] = useState('');
    
    // console.log('isEmpty', helper.errors.isEmpty);
    console.log('helper', helper);
    console.log('tipMessage', tipMessage);
                        

    useEffect(() => {
        // rendering condition
        const error = !helper.errors.isEmpty && !helper.state.inputValid; 
        const tip = helper.state.isFocus && helper.errors.isEmpty || !helper.errors.isEmpty && helper.state.inputValid;
        const label = helper.errors.isEmpty;
        setIsError(error);
        setIsTip(tip);
        setIsLabel(label);
        // set Error message
        for(const error in helper.errors) {
            if(helper.errors[error]) {
                setErrorMessage(validMessages.errors[error]);
            }
        }
        // set Tip message
        setTipMessage(validMessages[helper.id].helper);
        // set Label message
        setLabelMessage(validMessages[helper.id].label);

    });
    return (
        <>
            {isError && 
                <div style={{color: 'red'}}>
                    I am Error
                    {errorMessage}
                </div>}
            {isTip && 
                <div style={{color: 'blue'}}>
                    {tipMessage}
                </div>} 
            {!isLabel &&  
                <div style={{color: 'blue'}}> 
                    {labelMessage}
                </div>}
        </>
    );


}

InputHelper.propTypes = {
    helper: PropTypes.object,
    id: PropTypes.string,
}

export default InputHelper;