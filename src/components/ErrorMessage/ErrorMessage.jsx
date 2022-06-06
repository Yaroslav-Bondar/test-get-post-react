
// import UiVideo from '@ui/UiVideo';
// import video from './video/han-solo.mp4';

import styles from './ErrorMessage.module.scss';

const ErrorMessage = props => {
    const {errorApi} = props;
    console.log(errorApi);
    console.log(errorApi.stack);
    return (
        <>
            <h1 className={styles.error__message}>{errorApi.toString()}</h1>
        </>
    );
}

export default ErrorMessage;

// import styles from './ErrorMessage.module.scss';

// const ErrorMessage = () => {
//     return (
//         <div className={styles.error}>
//             <p className={styles.error__message}>
//                 The dark side of the force has won. <br />
//                 We cannot display data.<br />
//                 Come back when we fix everything
//             </p>

//             {/* <UiVideo src={video} classes={styles.video} /> */}
//         </div>
//     )
// }

// export default ErrorMessage;