import PropTypes from 'prop-types';
import styles from './Card.module.scss';

const Card = () => {
    return (
        <div className={styles.card}>
            <div className={styles.card__item}>
                <div className={styles.card__avatar}>
                    <img 
                        className={styles.card__img + ` img`} 
                        src='/img/avatar/01.svg' 
                        alt='User Avatar'
                    />
                </div>
                <div className={styles.card__name}>
                    Salvador Stewart Flynn Thomas Salva Salve...                                        </div>
                <div className={styles.card__about}>
                    <p className={styles.card__position}>
                        Leading specialist of the department of cent...                                             </p>
                    <p className={styles.card__email}>
                        frontend_develop@gmail.com
                    </p>
                    <p className={styles.card__phone}>
                        +38 (098) 278 44 24
                    </p>
                </div>
            </div>
        </div>
    );
}

// styles.card.propTypes = {
//     text: PropTypes.
// }

export default Card;