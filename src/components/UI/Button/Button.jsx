import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({isDisabled}) => {
    return (
        isDisabled 
            ? <button className={styles.button +` hover-btn btn btn_color_yellow`}>Sign up</button>
            : <button className={styles.button +` btn`} disabled>Sign up</button>
    );
}

Button.propTypes = {
    isDisabled: PropTypes.bool
}

export default Button;