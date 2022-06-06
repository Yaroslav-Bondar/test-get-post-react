import PropTypes from 'prop-types';
import {withErrorApi} from '../../../hoc-helpers/withErrorApi';
import styles from './Success.module.scss';

const Success = ({setErrorApi, data}) => {
    if(true === data instanceof Error) setErrorApi(data);
    return (
        <div className={styles.success}>
            {data.message}
        </div>
    );
}

Success.propTypes = {
    setErrorApi: PropTypes.func,
    data: PropTypes.object,
}
export default withErrorApi(Success);