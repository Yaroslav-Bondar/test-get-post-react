
// import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import styles from './Banner.module.scss';

const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.banner__container + ` _container`}>
                <article className={styles.banner__article}>
                    <section className={styles.banner__wrap}>
                        <h1 className={styles.banner__title + ` title title_color_white`}>
                            Test assignment for front-end developer
                        </h1>
                        <p className={`${styles.banner__text} ${styles.banner__text_color_white}`}>
                            What defines a good front-end developer is 
                            one that has skilled knowledge of HTML, 
                            CSS, JS with a vast understanding of User 
                            design thinking as they'll be 
                            building web interfaces with accessibility in mind.
                            They should also be excited to learn, as the world
                            of Front-End Development keeps evolving.
                        </p>
                        <AnchorLink href='#post' className={styles.banner__link + ` link link_hover link_color_yellow`}>
                            Sign up
                        </AnchorLink>
                    </section>
                </article>
            </div>            
        </section>
    );
}

export default Banner;