import PropTypes from 'prop-types';
import styles from './Position.module.scss';

const Position = ({positions}) => {
    return (
        <div className={styles.position}>
            <ul className={styles.position__list}>
                {positions.map(({id, name}) => 
                    <li key={id} className={styles.position__item}>
                        <input id={id} type="radio" name="position" value={name}/>
                        <label for={id} className="position__job">
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