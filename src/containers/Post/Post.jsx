import {useState, useEffect} from 'react';
// import PropTypes from 'prop-types';
import Form from '../../components/Post/Form';
import styles from './Post.module.scss';

const Post = () => {
    return (
        <section className={styles.post}>
            <div id='post' className={styles.post__container + ` _container`}>
                <h2 className={styles.post__title + ` title`}>
                    Working with GET request
                </h2>
                <div className={styles.post__form}>
                    <Form/>
                </div>
            </div>    
        </section>
    );
}

// Post.propTypes = {
//     text: PropTypes.
// }

export default Post;