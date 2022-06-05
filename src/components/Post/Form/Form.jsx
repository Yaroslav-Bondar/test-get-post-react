import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import InputHelper from '../InputHelper';
import Position from '../Position';
import {useInput} from '../../../hooks/validation/useInput';
import {getApiResource} from '../../../utils/network';
import {VALID_MESSAGES} from '../../../constants/validation';
import {RFC2822_EMAIL_VALIDATION} from '../../../constants/validation';
import {PHONE_VALIDATION} from '../../../constants/validation';
import {API_POSITIONS_PATH} from '../../../constants/api';
import styles from './Form.module.scss';

const Form = () => {
    const [positions, setPositions] = useState(null);
    const name = useInput('', 'name', 
                                {
                                    isEmpty: false, 
                                    minLength: 2, 
                                    maxLength: 60
                                }
                        );
    const email = useInput('', 'email', 
                            {
                                isEmpty: false, 
                                minLength: 10, 
                                maxLength: 100,
                                pattern: RFC2822_EMAIL_VALIDATION,
                            }
                        );
    const phone = useInput('', 'phone', 
                                {
                                    isEmpty: false, 
                                    pattern: PHONE_VALIDATION,
                                }
                            );
    const file = useInput(null, 'file',
                                {
                                    isFileEmpty: false,
                                    imageDimensions: {height: 70, width: 70, check: 'min'},
                                    fileType: ['image/jpg', 'image/jpeg'],
                                    fileSize: 1048576 //5242880, value in bytes
                                }
    );
    console.log('file obj', file); 
    useEffect(() => {
        (async () => {
            const data = await getApiResource(API_POSITIONS_PATH);
            setPositions(data.positions);
        })();
    }, []);

    return (
        <div className="form">
            <form className="form__container">
                <div className="form__inputs">
                    <div className="form__input">
                        <InputHelper 
                            helper = {name}
                            messages = {VALID_MESSAGES} 
                        />
                        <input
                            id="name" 
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
                            onBlur={(e) => email.handlers.onBlur(e)}
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
                            onBlur={(e) => phone.handlers.onBlur(e)}
                            onFocus={(e) => phone.handlers.onFocus(e)}
                        />
                    </div>
                </div>
                <div className="form__positions">
                    <div className="form__positions-title">
                        Select your position
                    </div>
                    <div className="form__position">
                        {positions && <Position positions={positions}/>}
                    </div>
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
                    <button 
                        // disabled={!name.formValid || !email.formValid} 
                        type="submit">Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

// Form.propTypes = {
//     text: PropTypes.
// }

export default Form;