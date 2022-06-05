import {useState, useEffect} from 'react';
// import PropTypes from 'prop-types';
import Form from '../../components/Post/Form';
// import {EMAIL_RFC2822} from '../../constants/root';
import styles from './Post.module.scss';

const Post = () => {
    return (
        <section className={styles.post}>
            <div id='post' className="post__container _container">
                <h2 className="post__title title">
                    Working with GET request
                </h2>
                <div className="post__form form">
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