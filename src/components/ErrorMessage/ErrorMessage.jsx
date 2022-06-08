import styles from './ErrorMessage.module.scss';

const ErrorMessage = ({error}) => {
    return (
        <div classes={styles.error}>
            <h3 className={styles.error__title}>{error.message}</h3>
            <p className={styles.error__text}>
                The dark side of the force has won.<br/>
                We cannot display data.<br/>
                Come back when we fix everything
            </p>
        </div>
    );
}

export default ErrorMessage;