import PropTypes from 'prop-types';
import ErrorMessage from '../../../components/ErrorMessage';
import SuccessMessage from '../SuccessMessage';
import styles from './Response.module.scss';

const Response = ({response}) => {
    return (
        <>
            {
                // response &&
                response instanceof Error ?
                <ErrorMessage error ={response}/> :
                <SuccessMessage message={response.message}/>
            }
        </>
    );
}

Response.propTypes = {
    response: PropTypes.object,
}

export default Response;