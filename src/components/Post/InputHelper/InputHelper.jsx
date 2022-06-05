import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './InputHelper.module.scss';

/**
 * sets hints and errors when entering data
 * @param {object} helper - user input hint and error state object
 * @param {object} messages - a set of messages to correct user input
 * @returns {jsx} jsx - jsx for rendering messages 
 */
const InputHelper = ({helper, messages}) => {
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [isTip, setIsTip] = useState(false);
    const [tipMessage, setTipMessage] = useState('');
    
    const [isLabel, setIsLabel] = useState(false);
    const [labelMessage, setLabelMessage] = useState('');
    
    // set error message from messages object
    function errorMessageTuner() {
        for(const error in helper.errors) { // * to function
            if(helper.errors[error]) {
                setErrorMessage(messages.errors[error]);
                break;
            }
        } 
    }
    useEffect(() => {
        if(helper.id === 'file') {
            // rendering condition
            const error = !helper.errors.isFileEmptyError && !helper.state.inputValid;
            // set error state
            setIsError(error);
            // set error message
            errorMessageTuner();
        } else {
            // rendering condition
            const error = !helper.errors.isEmptyError && !helper.state.inputValid; 
            const tip = helper.state.isFocus && helper.errors.isEmptyError || !helper.errors.isEmptyError && helper.state.inputValid;
            const label = !helper.errors.isEmptyError;
            // set states
            setIsError(error);
            setIsTip(tip);
            setIsLabel(label);
            // set Error message
            errorMessageTuner();
            // set Tip message
            setTipMessage(messages[helper.id].helper);
            // set Label message
            setLabelMessage(messages[helper.id].label);
        }
    });
    return (
        <>
            {isError && 
                <div style={{color: 'red'}}>
                    {errorMessage}
                </div>}
            {isTip && 
                <div style={{color: 'blue'}}>
                    {tipMessage}
                </div>} 
            {isLabel &&  
                <div style={{color: 'blue'}}> 
                    {labelMessage}
                </div>}
        </>
    );
}

InputHelper.propTypes = {
    helper: PropTypes.object,
    messages: PropTypes.object,
}

export default InputHelper;