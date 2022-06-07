import PropTypes from 'prop-types';
import styles from './SuccessMessage.module.scss';

const SuccessMessage = ({message}) => {
    return (
        <div>
            {message}
        </div>
    );
}

SuccessMessage.propTypes = {
    message: PropTypes.string,
}

export default SuccessMessage;