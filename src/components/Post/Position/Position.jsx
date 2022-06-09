import PropTypes from 'prop-types';
import styles from './Position.module.scss';

const Position = ({positions}) => {
    return (
        <div className={styles.position}>
            <ul className={styles.position__list}>
                {positions.map(({id, name}, index) =>
                    <li key={id} className={styles.position__item}>
                        <input 
                            type="radio" 
                            id={id} 
                            className={styles.position__radio} 
                            name='position_id' 
                            value={id}
                            checked={index === 0}
                        />
                        <label for={id} className={styles.position__job}>
                            {name}
                        </label>
                    </li>
                )}
            </ul>
        </div>
    );
}

Position.propTypes = {
    positions: PropTypes.array,
}

export default Position;