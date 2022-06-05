import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({isDisabled}) => {
    // const [isDisabled, setIsDisabled] = useState('');
    
    // useEffect(() => {
    //     // set the button's disabled attribute for
    //     if(disabled) {
    //         setIsDisabled('disabled');
    //     } else {
    //         setIsDisabled('');
    //     }
    // });
    // className={styles.button}
    console.log('isDisabled', isDisabled);
    return (
        isDisabled 
            ? <button className={styles.button +` hover-btn btn btn_color_yellow`}>Sign up</button>
            : <button className={styles.button +` btn`} disabled>Sign up</button>
    );
}

Button.propTypes = {
    disabled: PropTypes.bool
}

export default Button;