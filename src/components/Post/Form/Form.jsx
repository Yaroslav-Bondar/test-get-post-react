import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from '../../ErrorMessage';
import Modal from '../../Modal';
import InputHelper from '../InputHelper';
import Position from '../Position';
import Response from '../Response';
import {useInput} from '../../../hooks/validation/useInput';
import Preloader from '../../UI/Preloader';
import Button from '../../UI/Button';
import {getApiResource, pushFormData} from '../../../utils/network';
import {checkValidInputGroup} from '../../../services/validation/validation';
import {RFC2822_EMAIL_VALIDATION,
        VALID_MESSAGES, 
        PHONE_VALIDATION} from '../../../constants/validation';
import {API_USERS_PATH,
        API_POSITIONS_PATH, 
        API_TOKEN_PATH} from '../../../constants/api';
import styles from './Form.module.scss';

const Form = ({setReset}) => {
    const [positions, setPositions] = useState(null);
    const [isFormValid, setIsFormValid] = useState(false);
    const [response, setResponse] = useState(null);
    const [modalActive, setModalActive] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [isCover, setIsCover] = useState(false);

    const name = useInput('', 'name', 
                                {
                                    isEmpty: false, 
                                    minLength: 2, 
                                    maxLength: 60 
                                },
                        );
    const email = useInput('', 'email', 
                            {
                                isEmpty: false, 
                                minLength: 10, 
                                maxLength: 100,
                                pattern: RFC2822_EMAIL_VALIDATION,
                            },
                        );
    const phone = useInput('', 'phone', 
                                {
                                    isEmpty: false, 
                                    pattern: PHONE_VALIDATION,
                                },
                            );
    const file = useInput(null, 'file',
                                {
                                    isFileEmpty: false,
                                    imageDimensions: {height: 70, width: 70, check: 'min'}, // value in pixels
                                    fileType: ['image/jpg', 'image/jpeg'],
                                    fileSize: 5242880 // value in bytes
                                },
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        // start preloader
        setIsPending(true);
        // display preloader in position: absolute;
        setIsCover(true);
        // submitting form data for user registration
        const data = await pushFormData(e.target, API_USERS_PATH, API_TOKEN_PATH);
         // check for Error
         if(data instanceof Error) {
            // setError(data);
            setResponse(data);
            setModalActive(true);
            // stop preloader
            setIsPending(false);
            setIsCover(false);
        } else {
            setResponse(data);
            // display a message about successful registration
            setModalActive(true);
            setIsPending(false);
            setIsCover(false);
            // start updating the list of users 
            // in the "Working with a GET request" block after successful registration
            setReset(true);
        }
    };
    useEffect(() => {
        const inputsValid = [name.state.inputValid,email.state.inputValid,
                            phone.state.inputValid,file.state.inputValid]
        setIsFormValid(checkValidInputGroup(inputsValid));                   
    },[name.state.inputValid,email.state.inputValid,phone.state.inputValid,file.state.inputValid]);  
    useEffect(() => {
        // getting data to display position
        (async () => {
            const data = await getApiResource(API_POSITIONS_PATH);
            // check for Error
            if(data instanceof Error) {
                setError(data);
                setIsPending(false);
            } else {
                setPositions(data.positions);
                setIsPending(false);
                setError(null);
            }
        })();
    }, []);
    return (
        <div className={styles.form}>
            <div className={styles.form__modal}>
                <Modal 
                    active={modalActive}
                    setModalActive={setModalActive} 
                >
                    {response && <Response response={response}/>}
                </Modal>
            </div>
            <form id="form" className={styles.form} onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.form__container}>
                    <div className={styles.form__inputs}>
                        <div className={styles.form__helper}>
                            <InputHelper
                                helper = {name}
                                messages = {VALID_MESSAGES} 
                            > 
                                <input
                                    id="name" 
                                    className={styles.form__input}
                                    type="text" 
                                    aria-label="user name"
                                    name="name"
                                    placeholder="Your name"
                                    required
                                    value={name.values.value}
                                    onChange={(e) => name.handlers.onChange(e)}
                                    onBlur={(e) => name.handlers.onBlur(e)}
                                    onFocus={(e) => name.handlers.onFocus(e)}
                                />
                            
                            </InputHelper>
                        </div>
                        <div className={styles.form__helper}>   
                            <InputHelper
                                helper = {email}
                                messages = {VALID_MESSAGES} 
                            > 
                                <input
                                    id="email" 
                                    className={styles.form__input}
                                    type="email" 
                                    aria-label="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    value={email.values.value}
                                    onChange={(e) => email.handlers.onChange(e)}
                                    onBlur={(e) => email.handlers.onBlur(e)}
                                    onFocus={(e) => email.handlers.onFocus(e)}
                                />
                            </InputHelper>
                        </div>
                        <div className={styles.form__helper}>   
                            <InputHelper
                                helper = {phone}
                                messages = {VALID_MESSAGES} 
                            > 
                                <input
                                    id="phone"
                                    className={styles.form__input} 
                                    type="tel" 
                                    aria-label="phone number"
                                    name="phone"
                                    placeholder="Phone"
                                    required
                                    value={phone.values.value}
                                    onChange={(e) => phone.handlers.onChange(e)}
                                    onBlur={(e) => phone.handlers.onBlur(e)}
                                    onFocus={(e) => phone.handlers.onFocus(e)}
                                />
                            </InputHelper>
                        </div>
                    </div>
                    <div className={styles.form__position}>
                        <div className={styles[`form__position-title`]}>
                            Select your position
                        </div>
                        {
                            isPending && 
                                    <div className={isCover ?
                                                        styles.form__preloader + ' ' + styles.form__preloader_cover :
                                                        styles.form__preloader 
                                                    }
                                    >
                                        <Preloader/>
                                    </div>                        
                        }
                        {
                            error &&
                                <div className={styles.form__error}>
                                    <ErrorMessage error={error}/>
                                </div>
                        }
                        {
                            positions && 
                                <Position positions={positions}/>
                        }
                    </div>
                    <div className={styles.form__file}>
                        <InputHelper
                            helper={file}
                            messages={VALID_MESSAGES} 
                        >
                            <label className={styles[`form__photo-label`]}>
                                Upload
                                <input 
                                    className={styles.form__photo}
                                    id='file'
                                    type="file"
                                    name="photo"
                                    accept=".jpg, .jpeg" 
                                    required
                                    onChange={(e) => file.handlers.onChangeFile(e)}
                                />
                            </label>    
                        </InputHelper>
                    </div>
                    <div className={styles.form__btn}>
                        <Button isDisabled={isFormValid}/>
                    </div>
                </div>
            </form>
        </div>
    );
}

Form.propTypes = {
    setReset: PropTypes.func,
}
export default Form;