import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '../../static/img/logo.svg';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__container + ` _container`}>
                <div className="{styles.header__logo + ` logo`}">
                    <div className="logo__img">
                        <img src={logo} alt="logo" className="logo__img-item img img_contain"/>
                    </div>
                </div>
                <nav className={styles.header__links}>
                    <AnchorLink href='#get' className={styles.header__link + ` link link_hover link_color_yellow`}>
                        Users
                    </AnchorLink>
                    <AnchorLink href='#post' className={styles.header__link + ` link link_hover link_color_yellow`}>
                        Sign up
                    </AnchorLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;