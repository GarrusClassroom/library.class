import { Link } from 'react-router-dom';

import { HEADER_TITLE } from '../../constants/location';
import { BurgerMenu } from '../burger-menu';
import { HeaderUser } from '../header-user';

import logo from './assets/logo.svg';

import styles from './header.module.scss';

export const Header = () => (
    <header className={styles.header}>
        <Link to='/' className={styles.headerLink}>
            <img src={logo} alt='logo' className={styles.logo} />
        </Link>
        <BurgerMenu />

        <div className={styles.block}>
            <h2 className={styles.title}>{HEADER_TITLE.library}</h2>
            <HeaderUser />
        </div>
    </header>
);
