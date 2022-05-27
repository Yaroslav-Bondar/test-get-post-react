// import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';
import Card from '../../components/Get/Card'; 
import {getApiResource} from '../../utils/network';
import {API_ROOT,
        API_USERS,
        API_PARAM_PAGE,
        API_PARAM_COUNT} from '../../constants/api'
import styles from './Get.module.scss';

const Get = () => {
    const getResource = async (url) => {
        const data = await getApiResource(url);
        console.log('data', data);
    }
    useEffect(() => {
        getResource(API_ROOT + API_USERS + API_PARAM_PAGE + 1 + '&' + API_PARAM_COUNT + 5);
    }, []);
    return (
        <>
            <section className={styles.get}>
                <div className={styles.get__container +` _container`}>
                    <h2 className={styles.get__title +` title`}>
                        Working with GET request
                    </h2>
                    <div className={styles.get__users + ` users`}>
                        <div className="users__container">
                            <div className="users__row">
                                <div className="users__column">
                                    {/* <div className="user-card__item">
                                        <div className="user-card__avatar">
                                            <img 
                                                className="user-card__img img" 
                                                src="/img/avatar/01.svg" 
                                                alt="User Avatar"
                                            />
                                        </div>
                                        <div className="user-card__name">
                                            Salvador Stewart Flynn Thomas Salva Salve...                                        </div>
                                        <div className="user-card__about">
                                            <p className="user-card__position">
                                                Leading specialist of the department of cent...                                             </p>
                                            <p className="user-card__email">
                                                frontend_develop@gmail.com
                                            </p>
                                            <p className="user-card__phone">
                                                +38 (098) 278 44 24
                                            </p>
                                        </div>
                                    </div> */}
                                <Card/>    
                                </div>
                                <div className="users__column user-card">
                                    <div className="user-card__item">
                                        <div className="user-card__avatar">
                                            <img 
                                                className="user-card__img img" 
                                                src="/img/avatar/01.svg" 
                                                alt="User Avatar"
                                            />
                                        </div>
                                        <div className="user-card__name">
                                            Salvador Stewart Flynn Thomas...
                                        </div>
                                        <div className="user-card__about">
                                            <p className="user-card__position">
                                                Frontend Developer Frontend ...
                                            </p>
                                            <p className="user-card__email">
                                                frontend_develop@gmail.com
                                            </p>
                                            <p className="user-card__phone">
                                                +38 (098) 278 44 24
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="users__column user-card">
                                    <div className="user-card__item">
                                        <div className="user-card__avatar">
                                            <img 
                                                className="user-card__img img" 
                                                src="/img/avatar/01.svg" 
                                                alt="User Avatar"
                                            />
                                        </div>
                                        <div className="user-card__name">
                                            Salvador Stewart Flynn Thomas...
                                        </div>
                                        <div className="user-card__about">
                                            <p className="user-card__position">
                                                Frontend Developer Frontend ...
                                            </p>
                                            <p className="user-card__email">
                                                frontend_develop@gmail.com
                                            </p>
                                            <p className="user-card__phone">
                                                +38 (098) 278 44 24
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="users__column user-card">
                                    <div className="user-card__item">
                                        <div className="user-card__avatar">
                                            <img 
                                                className="user-card__img img" 
                                                src="/img/avatar/01.svg" 
                                                alt="User Avatar"
                                            />
                                        </div>
                                        <div className="user-card__name">
                                            Salvador Stewart Flynn Thomas...
                                        </div>
                                        <div className="user-card__about">
                                            <p className="user-card__position">
                                                Frontend Developer Frontend ...
                                            </p>
                                            <p className="user-card__email">
                                                frontend_develop@gmail.com
                                            </p>
                                            <p className="user-card__phone">
                                                +38 (098) 278 44 24
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="users__column user-card">
                                    <div className="user-card__item">
                                        <div className="user-card__avatar">
                                            <img 
                                                className="user-card__img img" 
                                                src="/img/avatar/01.svg" 
                                                alt="User Avatar"
                                            />
                                        </div>
                                        <div className="user-card__name">
                                            Salvador Stewart Flynn Thomas...
                                        </div>
                                        <div className="user-card__about">
                                            <p className="user-card__position">
                                                Frontend Developer Frontend ...
                                            </p>
                                            <p className="user-card__email">
                                                frontend_develop@gmail.com
                                            </p>
                                            <p className="user-card__phone">
                                                +38 (098) 278 44 24
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="users__column user-card">
                                    <div className="user-card__item">
                                        <div className="user-card__avatar">
                                            <img 
                                                className="user-card__img img" 
                                                src="/img/avatar/01.svg" 
                                                alt="User Avatar"
                                            />
                                        </div>
                                        <div className="user-card__name">
                                            Salvador Stewart Flynn Thomas...
                                        </div>
                                        <div className="user-card__about">
                                            <p className="user-card__position">
                                                Frontend Developer Frontend ...
                                            </p>
                                            <p className="user-card__email">
                                                frontend_develop@gmail.com
                                            </p>
                                            <p className="user-card__phone">
                                                +38 (098) 278 44 24
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="users__button btn btn_color_yellow">
                                Show more
                            </button>
                        </div>
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