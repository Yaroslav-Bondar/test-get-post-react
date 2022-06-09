import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './InputHelper.module.scss';

/**
 * sets hints and errors when entering data
 * @param {object} helper - user input hint and error state object
 * @param {object} messages - a set of messages to correct user input
 * @returns {jsx} jsx - jsx for rendering messages 
 */
const InputHelper = ({helper, messages, children}) => {
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [isTip, setIsTip] = useState(false);
    const [tipMessage, setTipMessage] = useState('');
    
    const [isLabel, setIsLabel] = useState(false);
    const [labelMessage, setLabelMessage] = useState('');
    
    /**
     * set error message from messages object
     * by the name of the error sets the corresponding messages
     */
    function getErrorMessage() {
        for(const error in helper.errors) { 
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
            getErrorMessage();
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
            getErrorMessage();
            // set Tip message
            setTipMessage(messages[helper.id].helper);
            // set Label message
            setLabelMessage(messages[helper.id].label);
        }
    });
    return (
        <>
            { helper.id === 'file' && 
                <div className={styles.file}>
                    <div className={styles.file__btn}>
                        {children}
                    </div>
                    <div className={styles.file__preview}>
                        <span className={styles[`file__preview-text`]}>
                            Upload your photo
                        </span>
                    </div>
                </div>
            }
            { helper.id !== 'file' &&
                <div className={!isError ? 
                                    styles.helper : 
                                    styles.helper + ' ' + styles.helper_error
                                }
                >
                    {isError && 
                        <div className={styles.helper__error}>
                            {errorMessage}
                        </div>}
                    {isTip && 
                        <div className={styles.helper__tip}>
                            {tipMessage}
                        </div>} 
                    {isLabel &&  
                        <div className={!isError ? 
                                            styles.helper__label : 
                                            styles.helper__label + ' ' + styles.helper__label_error
                                        }
                        > 
                            {labelMessage}
                        </div>}
                    {children}  
                </div>

            }        
        </>    
    );
}

InputHelper.propTypes = {
    helper: PropTypes.object,
    messages: PropTypes.object,
}

export default InputHelper;