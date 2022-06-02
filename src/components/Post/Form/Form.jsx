import PropTypes from 'prop-types';
import InputHelper from '../InputHelper';
import {useInput} from '../../../hooks/validation/useInput';
import styles from './Form.module.scss';

const Form = () => {
    const name = useInput('', 'name', {isEmpty: false, minLength: 2, maxLength: 4});
    const email = useInput('', {isEmpty: false, minLength: 5});
    return (
        <div className="form">
            <form className="form__container">
                <div className="form__inputs">
                    <div className="form__input">
                        <InputHelper 
                            helper = {name} 
                        />
                        <input
                            id="name" 
                            type="text" 
                            aria-label="user name"
                            name="name"
                            placeholder="Your name"
                            minLength="2" 
                            maxLength="60"
                            required
                            value={name.values.value}
                            onChange={(e) => name.handlers.onChange(e)}
                            onBlur={(e) => name.handlers.onBlur(e)}
                            onFocus={(e) => name.handlers.onFocus(e)}
                        />
                    </div>
                    <div className="form__input">   
                        {/* {(email.isDirty && email.isEmpty) && <div style={{color: 'red'}}> field can not be empty </div>} */}
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