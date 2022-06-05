import PropTypes from 'prop-types';
import styles from './More.module.scss';

const More = ({nextPage, getResource}) => {
    // console.log('More', typeof nextPage);
    const handleChangeMore = () => {
        getResource(nextPage);
    };
    return (
        <button 
            className={styles.more__btn + ` hover-btn btn btn_color_yellow`}
            onClick={handleChangeMore}
        >
            Show more     
        </button>
    );
}

More.propTypes = {
    nextPage: PropTypes.string,
    getResource: PropTypes.func,
}

export default More;