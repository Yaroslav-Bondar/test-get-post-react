import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import InputHelper from '../InputHelper';
import Position from '../Position';
import Success from '../Success';
import {useInput} from '../../../hooks/validation/useInput';
// import {withErrorApi} from '../../../hoc-helpers/withErrorApi';
import Button from '../../UI/Button';
import {getApiResource, pushFormData} from '../../../utils/network';
import {RFC2822_EMAIL_VALIDATION,
        VALID_MESSAGES, 
        PHONE_VALIDATION} from '../../../constants/validation';
import {API_USERS_PATH,
        API_POSITIONS_PATH, 
        API_TOKEN_PATH} from '../../../constants/api';
import styles from './Form.module.scss';

const Form = () => {
    const [positions, setPositions] = useState(null);
    const [isFormValid, setIsFormValid] = useState(false);
    const [isSuccess, setSuccess] = useState({render: false, data: null});

    const name = useInput('', 'name', 
                                {
                                    isEmpty: false, 
                                    minLength: 2, 
                                    maxLength: 60
                                },
                                setIsFormValid
                        );
    const email = useInput('', 'email', 
                            {
                                isEmpty: false, 
                                minLength: 10, 
                                maxLength: 100,
                                pattern: RFC2822_EMAIL_VALIDATION,
                            },
                            setIsFormValid
                        );
    const phone = useInput('', 'phone', 
                                {
                                    isEmpty: false, 
                                    pattern: PHONE_VALIDATION,
                                },
                                setIsFormValid
                            );
    const file = useInput(null, 'file',
                                {
                                    isFileEmpty: false,
                                    imageDimensions: {height: 70, width: 70, check: 'min'}, // value in pixels
                                    fileType: ['image/jpg', 'image/jpeg'],
                                    fileSize: 5242880 // 1048576, value in bytes
                                },
                                setIsFormValid
    );
    console.log('file obj', file);
    console.log('isFormValid', isFormValid);
    console.log('isSuccess', isSuccess);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await pushFormData(form, API_USERS_PATH, API_TOKEN_PATH);
        console.log('data', data);
        if(true !== data instanceof Error) {
            // render success  
            setSuccess({render: true, data});
        } else {
            // render error
            setSuccess({render: true, data});
        }
        
    };
    useEffect(() => {
        const formValid = [name.state.inputValid,email.state.inputValid,
                            phone.state.inputValid,file.state.inputValid]
        if(formValid.includes(false)) {
            setIsFormValid(false);
        } else {
            setIsFormValid(true);
        }
    },[name.state.inputValid,email.state.inputValid,phone.state.inputValid,file.state.inputValid]);  
    useEffect(() => {
        (async () => {
            const data = await getApiResource(API_POSITIONS_PATH);
            setPositions(data.positions);
        })();
    }, []);

    return (
        <div className="form">
            {isSuccess.render && <Success data={isSuccess.data}/>}
            <form id="form" className="form__container" onSubmit={handleSubmit}>
                <div className="form__inputs">
                    <div className={styles.form__wrap}>
                        <InputHelper 
                            helper = {name}
                            messages = {VALID_MESSAGES} 
                        />
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
                            // onBlur={(e) => name.handlers.onBlur(e)}
                            onFocus={(e) => name.handlers.onFocus(e)}
                        />
                    </div>
                    <div className="form__input">   
                        <InputHelper 
                            helper = {email}
                            messages = {VALID_MESSAGES} 
                        />
                        <input
                            id="email" 
                            type="email" 
                            aria-label="email"
                            name="email"
                            placeholder="Email"
                            required
                            value={email.values.value}
                            onChange={(e) => email.handlers.onChange(e)}
                            // onBlur={(e) => email.handlers.onBlur(e)}
                            onFocus={(e) => email.handlers.onFocus(e)}
                        />
                    </div>
                    <div className="form__input">   
                        <InputHelper 
                            helper = {phone}
                            messages = {VALID_MESSAGES} 
                        />
                        <input
                            id="phone" 
                            type="tel" 
                            aria-label="phone number"
                            name="phone"
                            placeholder="Phone"
                            required
                            value={phone.values.value}
                            onChange={(e) => phone.handlers.onChange(e)}
                            // onBlur={(e) => phone.handlers.onBlur(e)}
                            onFocus={(e) => phone.handlers.onFocus(e)}
                        />
                    </div>
                </div>
                <div className="form__positions">
                    {positions && <Position positions={positions}/>}
                </div>
                <div className="form__file">
                    <div className="form__input">
                        <InputHelper 
                            helper = {file}
                            messages = {VALID_MESSAGES} 
                        />
                        <input 
                            className="form__photo"
                            type="file"
                            name="photo"
                            accept=".jpg, .jpeg" 
                            required
                            onChange={(e) => file.handlers.onChangeFile(e)}
                        />
                    </div>
                </div>
                <div className="form__btn">
                    <Button isDisabled={isFormValid}/>
                </div>
            </form>
        </div>
    );
}

// Form.propTypes = {
//     setErrorApi: PropTypes.func,
// }

// export default withErrorApi(Form);
export default Form;