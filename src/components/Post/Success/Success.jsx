import {useEffect} from 'react';
import PropTypes from 'prop-types';
// import {withErrorApi} from '../../../hoc-helpers/withErrorApi';
import SuccessMessage from '../SuccessMessage';
import ErrorMessage from '../ErrorMessage';

import styles from './Success.module.scss';
// {setErrorApi, 
const Success = ({data}) => {
    console.log('data', data);
    // console.log('setErrorApi', setErrorApi);
    // useEffect(()=> {
    //     console.log('Use Effect', data);
    //     if(true === data.data instanceof Error) {
    //         setErrorApi(false);
    //     } else {
    //         setErrorApi(true);
    //     }
    // },[data]);
    // <div className={styles.success}>
    //     Ok
    // </div>
    return (
        <>
            {
                data instanceof Error ?
                <ErrorMessage error ={data}/> :
                <SuccessMessage message={data.message}/>
            }
        </>
    );
}

Success.propTypes = {
    // setErrorApi: PropTypes.func,
    data: PropTypes.object,
}
// export default withErrorApi(Success);
export default Success;