import PropTypes from 'prop-types';
import styles from './ErrorMessage.module.scss';

const ErrorMessage = ({error}) => {
    return (
        <>
            {error.toString()}
        </>
    );
}

ErrorMessage.propTypes = {
    error: PropTypes.object,
}

export default ErrorMessage;