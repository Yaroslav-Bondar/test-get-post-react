import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = (props) => {
    let {helperText, errorText, id, ...rest} = props;

    // console.log('Input', helperText);
    return (
        <div className={styles.input}>
            <input id={id} className={styles.input__item} {...rest}/>
            <label for={id} className={styles.input__label}>
                {props.placeholder}
            </label>
            <span className={styles.input__helper}>{helperText}</span>
            <span className={styles.input__error}>{errorText}</span>
        </div>
    );
}

Input.propTypes = {
    props: PropTypes.object
}

export default Input;