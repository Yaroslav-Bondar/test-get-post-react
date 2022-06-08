// import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';
import Preloader from '../../components/UI/Preloader';
import ErrorMessage from '../../components/ErrorMessage';
import Card from '../../components/Get/Card';
import More from '../../components/Get/More';
import {getApiResource} from '../../utils/network';
import {API_USERS_PATH,
        API_USERS_PARAMS} from '../../constants/api'
import styles from './Get.module.scss';

const Get = () => {
    const [users, setUsers] = useState(null);
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
            setUsers(prevState => {
                if(!prevState) prevState = [];
                return [...prevState, ...usersList]
            });
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
                    { 
                        users &&                        
                            <div className={styles.get__users}>
                                <Card users = {users}/>
                            </div>
                    }
                    {
                        error &&
                            <div className={styles.get__error}>
                                <ErrorMessage error={error}/>
                            </div>
                    }
                    {
                        isPending && 
                            <div className={styles.get__preloader}>
                                <Preloader/>
                            </div>
                    }
                    {
                        nextPage && 
                            <div className={styles.get__more}>
                                <More 
                                    nextPage = {nextPage}
                                    getResource = {getResource}
                                    setIsPending = {setIsPending}
                                    setError = {setError}
                                />
                        </div>
                    }
                </div>
            </section>
        </>
    );
}

// Get.propTypes = {
//     text: PropTypes.
// }
// console.log('Get', Get);
export default Get;