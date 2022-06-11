import PropTypes from 'prop-types';
import styles from './Card.module.scss';

const Card = ({users}) => {
    return (
        <ul className={styles.card__list}>
            {users.map(({id,photo,name,position,email,phone}) => 
                <li className={styles.card__item} key={id}>
                    <div className={styles.card__avatar}>
                        <img 
                            className={styles.card__img + ` img img_contain`} 
                            src={photo} 
                            alt='User Avatar'
                        />
                    </div>
                    <div className={styles.card__name}>
                        {name}                                        
                    </div>
                    <div className={styles.card__about}>
                        <p className={styles.card__position}>
                            {position}                                             
                        </p>
                        <a className={styles.card__email} 
                            href={`mailto:${email}`}
                        >
                            {email}
                            <span className={styles.card__emailtip}>
                                {email}
                            </span>
                        </a>
                        <a className={styles.card__phone}
                            href={`tel:${phone}`} 
                        >
                            {phone}
                            <span className={styles.card__phonetip}>
                                {phone}
                            </span>
                        </a>
                    </div>
                </li>
            )}
        </ul>
    );
}

Card.propTypes = {
    users: PropTypes.array,
}

export default Card;