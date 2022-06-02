import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './InputHelper.module.scss';

/**
 * 
 */
const InputHelper = ({helper, messages}) => {
    // console.log('validMessages', validMessages);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [isTip, setIsTip] = useState(false);
    const [tipMessage, setTipMessage] = useState('');
    
    const [isLabel, setIsLabel] = useState(false);
    const [labelMessage, setLabelMessage] = useState('');
    
    // console.log('isEmptyError', helper.errors.isEmptyError);
    // console.log('helper', helper);
    // console.log('tipMessage', tipMessage);

    useEffect(() => {
        // rendering condition
        const error = !helper.errors.isEmptyError && !helper.state.inputValid; 
        const tip = helper.state.isFocus && helper.errors.isEmptyError || !helper.errors.isEmptyError && helper.state.inputValid;
        const label = helper.errors.isEmptyError;
        setIsError(error);
        setIsTip(tip);
        setIsLabel(label);
        // set Error message
        for(const error in helper.errors) {
            if(helper.errors[error]) {
                setErrorMessage(messages.errors[error]);
            }
        }
        // set Tip message
        setTipMessage(messages[helper.id].helper);
        // set Label message
        setLabelMessage(messages[helper.id].label);

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