// import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';
import Card from '../../components/Get/Card';
import More from '../../components/Get/More';
import {getApiResource} from '../../utils/network';
import {API_USERS_PATH,
        API_PARAM_PAGE,
        API_PARAM_COUNT,
    } from '../../constants/api'
import styles from './Get.module.scss';

const Get = () => {
    const [users, setUsers] = useState(null);
    const [nextPage, setNextPage] = useState(1);
    const getResource = async (url) => {
        const data = await getApiResource(url);
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
        // console.log('usersList', usersList);
        setNextPage(data.links.next_url);
        setUsers(usersList);
    }
    useEffect(() => {
        getResource(API_USERS_PATH + API_PARAM_PAGE + 1 + '&' + API_PARAM_COUNT + 6);
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
                                    />
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

// Get.propTypes = {
//     text: PropTypes.
// }

export default Get;