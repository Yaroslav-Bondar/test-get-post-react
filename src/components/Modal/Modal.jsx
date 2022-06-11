import PropTypes from 'prop-types';
import styles from './Modal.module.scss';

const Modal = ({active, setModalActive, children}) => {
    const closeHandler = () => {
        setModalActive(false);
    }
    return (
        <div 
            onClick={closeHandler}
            className={active ? 
                            styles.modal + ' ' + styles.modal_active:
                            styles.modal 
                        }
        >
            <div
                // preventing the window from closing
                onClick={e => e.stopPropagation()}   
                className={active ? 
                                styles.modal__container + ' ' + styles.modal__container_active:
                                styles.modal__container 
                            }
            >
                <span 
                    onClick={closeHandler} 
                    className={styles.modal__close}
                >
                    x
                </span>
                    {children}
            </div>    
        </div>
    );
}

Modal.propTypes = {
    active: PropTypes.bool,
    setModalActive: PropTypes.func,
    children: PropTypes.object,
}
export default Modal;