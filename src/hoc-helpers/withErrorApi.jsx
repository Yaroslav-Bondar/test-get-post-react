import {useState} from 'react';
import ErrorMessage from '../components/ErrorMessage';
// ++
const withErrorApi = View => {
    return props => {
        const [errorApi, setErrorApi] = useState(false);
        console.log(errorApi);
        console.log(props);
        // (true === errorApi instanceof Error)
        return (
            <> 
                { errorApi ? <ErrorMessage errorApi = {errorApi}/> : 
                    <View setErrorApi = {setErrorApi} data = {props}/> }
            </>
        )
    }
}

export {withErrorApi};