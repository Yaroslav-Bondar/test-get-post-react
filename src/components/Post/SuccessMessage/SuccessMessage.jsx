import PropTypes from 'prop-types';
import successImg from './img/success-image.svg'
import styles from './SuccessMessage.module.scss';

const SuccessMessage = ({message}) => {
    return (
        <div className={styles.success}>
            <div className={styles.success__title + ` title`}>
                {message}
            </div>
            <div className={styles.success__img}>
                <img src={successImg} className={styles[`success__img-item`] + ` img img_contain`} alt="successful registration"/>
            </div>
        </div>
    );
}

SuccessMessage.propTypes = {
    message: PropTypes.string,
}

export default SuccessMessage;