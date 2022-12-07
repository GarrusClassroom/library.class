import { Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { NAV_MENU_ALL, NAV_MENU_LIST, NAV_MENU_MAIN } from '../../constants/nav-menu-list';

import arrowBottomBlack from './assets/arrow-bottom-black.svg';
import arrowTopColor from './assets/arrow-top-color.svg';
import arrowTopColorCollapse from './assets/arrow-top-color-сollapse.svg';

import styles from './navigation.module.scss';

type NavigationProps = {
    children?: ReactNode;
    setButtonState?: Dispatch<SetStateAction<boolean>>;
    burgerMenuNavigation?: boolean;
};

export const Navigation = ({
    children,
    setButtonState,
    burgerMenuNavigation = false,
}: NavigationProps) => {
    const { pathname } = useLocation();

    const [isMenuBook, setMenuBook] = useState(true);

    return (
        <nav className={styles.navigation}>
            <NavLink
                to={
                    pathname.split('/')[1] === NAV_MENU_MAIN.books.path &&
                    pathname.split('/')[2] !== NAV_MENU_ALL.category
                        ? `/${NAV_MENU_MAIN.books.path}/${pathname.split('/')[2]}`
                        : `/${NAV_MENU_MAIN.books.path}/${NAV_MENU_ALL.category}`
                }
                onClick={() => setMenuBook(!isMenuBook)}
                className={({ isActive }) =>
                    isActive || pathname.split('/')[1] === NAV_MENU_MAIN.books.path
                        ? classNames(styles.navLink, styles.navLinkActive)
                        : styles.navLink
                }
            >
                {NAV_MENU_MAIN.books.name}
                <img
                    src={
                        pathname.split('/')[1] === NAV_MENU_MAIN.books.path
                            ? isMenuBook
                                ? arrowTopColor
                                : arrowTopColorCollapse
                            : arrowBottomBlack
                    }
                    alt='icon Arrow'
                    className={styles.navImg}
                />
            </NavLink>
            <div
                data-test-id='nav-menu'
                className={classNames(
                    styles.books,
                    burgerMenuNavigation && styles.booksBurgerMenu,
                    burgerMenuNavigation && !isMenuBook && styles.booksBurgerMenuHide,
                )}
            >
                <ul
                    className={classNames(
                        burgerMenuNavigation ? styles.navBurgerMenuNavList : styles.navList,
                        !isMenuBook && styles.navListHide,
                    )}
                >
                    <li>
                        <NavLink
                            to={`/${NAV_MENU_MAIN.books.path}/${NAV_MENU_ALL.category}`}
                            className={({ isActive }) =>
                                isActive
                                    ? classNames(styles.navItem, styles.navItemActive)
                                    : styles.navItem
                            }
                            onClick={() => setButtonState?.(false)}
                        >
                            Все книги
                        </NavLink>
                    </li>
                    {NAV_MENU_LIST.map(({ name, category, id }) => (
                        <li key={id}>
                            <NavLink
                                data-test-id='nav-item'
                                to={`${NAV_MENU_MAIN.books.path}/${category}`}
                                className={({ isActive }) =>
                                    isActive
                                        ? classNames(styles.navItem, styles.navItemActive)
                                        : styles.navItem
                                }
                                onClick={() => setButtonState?.(false)}
                            >
                                {name}
                            </NavLink>
                            <span
                                className={classNames(
                                    pathname.split('/')[2] === category
                                        ? styles.textQuantityActive
                                        : styles.textQuantity,
                                )}
                            >
                                {name.length}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <div
                className={classNames(
                    burgerMenuNavigation ? styles.navBurgerMenuTerms : styles.terms,
                    !isMenuBook &&
                        (burgerMenuNavigation ? styles.navBurgerMenuTermsTop : styles.termsTop),
                )}
            >
                <NavLink
                    to={`/${NAV_MENU_MAIN.terms.path}`}
                    onClick={() => {
                        setMenuBook(false);
                        setButtonState?.(false);
                    }}
                    className={({ isActive }) =>
                        isActive ? classNames(styles.navLink, styles.navLinkActive) : styles.navLink
                    }
                >
                    {NAV_MENU_MAIN.terms.name}
                </NavLink>
                <NavLink
                    to={`/${NAV_MENU_MAIN.contract.path}`}
                    onClick={() => {
                        setMenuBook(false);
                        setButtonState?.(false);
                    }}
                    className={({ isActive }) =>
                        isActive ? classNames(styles.navLink, styles.navLinkActive) : styles.navLink
                    }
                >
                    {NAV_MENU_MAIN.contract.name}
                </NavLink>

                {children}
            </div>
        </nav>
    );
};
