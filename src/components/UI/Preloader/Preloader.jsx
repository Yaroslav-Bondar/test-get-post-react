import PropTypes from 'prop-types';
import preloader from './img/preloader.svg';
import styles from './Preloader.module.scss';

const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <img src={preloader} className={styles.preloader__item + ` img img_contain`} alt="preloader"/>
        </div>
    );
}

// Preloader.propTypes = {
//     text: PropTypes.
// }

export default Preloader;