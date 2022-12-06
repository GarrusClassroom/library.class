import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Footer } from '../footer';
import { Header } from '../header';

import styles from './layout.module.scss';

export const Layout = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className={styles.layout}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};
