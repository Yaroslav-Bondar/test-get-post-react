import PropTypes from 'prop-types';
import ErrorMessage from '../../../components/ErrorMessage';
import SuccessMessage from '../SuccessMessage';

const Response = ({response}) => {
    return (
        <>
            {
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