import PropTypes from 'prop-types';
import styles from './More.module.scss';

const More = ({nextPage, getResource, setIsPending, setError}) => {
    const handleChangeMore = () => {
        setError(null);
        setIsPending(true);
        getResource(nextPage);
    };
    return (
        <button 
            className={styles.more__btn + ` btn btn_hover btn_color_yellow`}
            onClick={handleChangeMore}
        >
            Show more     
        </button>
    );
}

More.propTypes = {
    nextPage: PropTypes.string,
    getResource: PropTypes.func,
    setIsPending: PropTypes.func,
    setError: PropTypes.func,
}

export default More;