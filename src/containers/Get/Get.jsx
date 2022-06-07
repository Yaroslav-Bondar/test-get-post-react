// import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';
import Preloader from '../../components/UI/Preloader';
import Card from '../../components/Get/Card';
import More from '../../components/Get/More';
import {getApiResource} from '../../utils/network';
import {API_USERS_PATH,
        API_USERS_PARAMS} from '../../constants/api'
import styles from './Get.module.scss';

const Get = () => {
    const [users, setUsers] = useState([]);
    const [nextPage, setNextPage] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const getResource = async (url) => {
        const data = await getApiResource(url);
        if(data instanceof Error) {
            // set error message (since data == Error)
            setError(data.message);
            setIsPending(false);
        } else {
            // console.log('data', data);
            const usersList = data.users.map(({id,photo,name,position,email,phone}) => {
                return {
                    id,
                    photo,
                    name,
                    position,
                    email,
                    phone,
                }
            }); 
            setNextPage(data.links.next_url);
            // adding users to otput
            setUsers(prevState => {return [...prevState, ...usersList]});
            setIsPending(false);
            setError(null);
        }
    }
    useEffect(() => {
        getResource(API_USERS_PATH + API_USERS_PARAMS);
    }, []);
    return (
        <>
            <section className={styles.get}>
                <div id='get' className={styles.get__container +` _container`}>
                    <h2 className={styles.get__title +` title`}>
                        Working with GET request
                    </h2>
                    <div className={styles.get__users}>
                        {users && <Card users = {users}/>}
                        {nextPage && <More 
                                        nextPage = {nextPage}
                                        getResource = {getResource}
                                        setIsPending = {setIsPending}
                                        setError = {setError}
                                        />
                        }
                    </div>
                    {error && <div>{error}</div>}
                    {isPending && <Preloader/>}
                </div>
            </section>
        </>
    );
}

// Get.propTypes = {
//     text: PropTypes.
// }

export default Get;