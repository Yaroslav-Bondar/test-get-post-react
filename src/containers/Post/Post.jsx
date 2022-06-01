import {useState, useEffect} from 'react';
// import PropTypes from 'prop-types';
// import Input from '../../components/UI/Input';
// import {EMAIL_RFC2822} from '../../constants/root';
import styles from './Post.module.scss';

const helperMessages = {
    helpers: {
        name: {
            helper: 'should be 2-60 characters',
            label: 'user name'
        }
    }
}

const validMessages = {
    errors : {
        minLengthMessage: 'too few characters entered',
        maxLengthMessage: 'too many characters', 
        isEmptyMessage: 'field can not be empty',
    },
    ...helperMessages,
}

const useInput = (initialValue, validations, messages, id) => {
    const [value, setValue] = useState(initialValue);
    // exit state of the input
    const [isDirty, setDirty] = useState(false);
    const [isFocus, setIsFocus] = useState(false);
    // const [helpMessages, setHelpMessages] = useState(messages.help.id);
    const valid = useValidation(value, validations, messages.error);
    
    const onChange = (e) => {
        // console.log('onChange');
        setValue(e.target.value);
    }
    
    const onBlur = (e) => {
        setIsFocus(false);
        console.log('focus lost');
        // setDirty(true);
    }

    const onFocus = (e) => {
        setIsFocus(true);
        console.log('Focus');
    }

    return {
        onChange,
        onBlur,
        onFocus,
        value,
        isDirty,
        isFocus,
        ...valid,
        ...messages.helpers[id],
        ...messages.errors
    }
}

const useValidation = (value, validations, messages) => {
    const [isEmpty, setEmpty] = useState(true);
    // const [isEmptyMessage, setEmptyMessage] = useState('');
    const [minLengthError, setMinLengthError] = useState(false);
    // const [minLengthMassage, setMinLengthMessage] = useState('');
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [inputValid, setInputValid] = useState(false);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {

                case 'minLength':
                    if(value.length < validations[validation]) {
                        setMinLengthError(true);
                        // setMinLengthMessage(messages.minLength);
                    } else {
                        setMinLengthError(false);
                        // setMinLengthMessage('');
                    }
                    break;

                case 'isEmpty':
                    if(value) {
                        setEmpty(false);
                        // setEmptyMessage('');
                    } else {
                        setEmpty(true);
                        // setEmptyMessage(messages.isEmpty);
                    }
                    break;

                case 'maxLength':
                    if(value.length > validations[validation]) {
                        setMaxLengthError(true);
                    } else {
                        setMaxLengthError(false);
                    }
                    break;
                
                case 'isEmail':
                    // const re = //;
                    // if(re.test(value.toLowerCase())) {
                    //     setEmailError(false);
                    // } else {
                    //     setEmailError(true);
                    // }
                    break;
            }
        }
    }, [value]);
    // general field validation
    useEffect(() => {
        if(isEmpty || minLengthError || maxLengthError || emailError) {
            setInputValid(false);
        } else {
            setInputValid(true);
        }
    }, [isEmpty, minLengthError, maxLengthError, emailError]);
    
    return {
        isEmpty,
        minLengthError,
        maxLengthError,
        emailError,
        inputValid,
    }
}

const Post = () => {
    const name = useInput('', {isEmpty: false, minLength: 2, maxLength: 4}, validMessages, 'name');
    const email = useInput('', {isEmpty: false, minLength: 5}, validMessages);
    console.log('name', name);
    return (
        <section className={styles.post}>
            <div className="post__container _container">
                <h2 className="post__title title">
                    Working with GET request
                </h2>
                <div className="post__form form">
                    <form className="form__container">
                        <div className="form__inputs">
                            <div className="form__input">
                                {(!name.isEmpty && name.minLengthError || name.maxLengthError) && 
                                    <div style={{color: 'red'}}>
                                        {name.minLengthError && name.minLengthMessage}
                                        {name.maxLengthError && name.maxLengthMessage}
                                    </div>}
                                {(name.isFocus && name.isEmpty || !name.isEmpty && !name.minLengthError && !name.maxLengthError) && 
                                    <div style={{color: 'blue'}}>{name.helper}</div>}
                                
                                {(!name.isEmpty) && 
                                    <div style={{color: 'blue'}}>{name.label}</div>}    

                                <input
                                    id="name" 
                                    type="text" 
                                    aria-label="user name"
                                    name="name"
                                    placeholder="Your name"
                                    minLength="2" 
                                    maxLength="60"
                                    required
                                    value={name.value}
                                    onChange={(e) => name.onChange(e)}
                                    onBlur={(e) => name.onBlur(e)}
                                    onFocus={(e) => name.onFocus(e)}
                                    // helperText="User name"
                                    // errorText="should contain 2-60 characters"
                                />
                            </div>
                            <div className="form__input">   
                                {(email.isDirty && email.isEmpty) && <div style={{color: 'red'}}> field can not be empty </div>}
                                <input
                                    id="email" 
                                    type="email" 
                                    aria-label="email"
                                    name="email"
                                    placeholder="Email"
                                    minLength="2"
                                    maxLength="100"
                                    // pattern={EMAIL_RFC2822}
                                    required
                                    value={email.value}
                                    onChange={(e) => email.onChange(e)}
                                    onBlur={(e) => email.onBlur(e)}
                                    // pattern={^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$)} 
                                />
                            </div>
                        </div>
                        <div className="form__btn">
                            <button disabled={!name.inputValid || !email.inputValid} type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>    
        </section>
    );
}

// Post.propTypes = {
//     text: PropTypes.
// }

export default Post;