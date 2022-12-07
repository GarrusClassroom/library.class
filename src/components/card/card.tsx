import { Link, useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import { BUTTON_TEXT } from '../../constants/button';
import { MenuViewEnum } from '../../constants/menu-view';
import { NAV_MENU_ALL, NAV_MENU_MAIN } from '../../constants/nav-menu-list';
import { USER } from '../../constants/user';
import { Button } from '../button';
import { Rating } from '../rating';

import IconPlugImg from './assets/icon-plug-img.svg';

import styles from './card.module.scss';

type BookType = {
    img?: string;
    rating?: number | null;
    title: string;
    authors?: string[];
    year?: number;
    status?: string;
    userIdReserved?: number | null;
    date?: string;
    menuView?: string;
    id: number;
};

export const Card = ({
    img = IconPlugImg,
    rating,
    title,
    authors,
    year,
    status,
    userIdReserved,
    date,
    menuView,
    id,
}: BookType) => {
    const navigate = useNavigate();

    const { pathname } = useLocation();

    const classNameCard = (name: string) =>
        classNames(
            menuView === MenuViewEnum.window ? styles[`${name}Window`] : styles[`${name}List`],
        );

    const buttontextReserv =
        status === 'free'
            ? BUTTON_TEXT.RESERV
            : status === 'reserved' && userIdReserved === USER.contract
            ? BUTTON_TEXT.RESERVED
            : BUTTON_TEXT.BUSY;

    const classButtonReserve = classNames(
        styles.button,
        buttontextReserv === BUTTON_TEXT.RESERV ? styles.buttonReserv : styles.buttonReserved,
    );

    return (
        <Link
            to={
                !pathname.split('/')[2]
                    ? `/${NAV_MENU_MAIN.books.path}/${NAV_MENU_ALL.category}/${id}`
                    : `/${NAV_MENU_MAIN.books.path}/${pathname.split('/')[2]}/${id}`
            }
            key={id}
        >
            <li className={classNameCard('card')} data-test-id='content-card'>
                <img src={img} alt={title} className={classNameCard('cardImg')} />
                <div className={classNameCard('rating')}>
                    {rating ? (
                        <Rating rating={rating} classNameStar={styles.star} />
                    ) : (
                        <span className={styles.textNoRaring}>Ещё нет оценок</span>
                    )}
                </div>
                <div className={classNameCard('titleBlock')}>
                    <p className={classNameCard('cardTitle')}>{title}</p>
                </div>
                <span className={classNameCard('cardAuthor')}>
                    {authors && authors.length > 0 && authors.join(', ')}, {year}
                </span>
                <div className={classNameCard('cardButton')}>
                    <Button
                        classButton={classButtonReserve}
                        onClick={() => {
                            navigate('/');
                        }}
                        isDisabled={status === 'reserved' && userIdReserved !== USER.contract}
                    >
                        <span>{buttontextReserv}</span>
                        {date && buttontextReserv === '' ? `Занята до ${date}` : null}
                    </Button>
                </div>
            </li>
        </Link>
    );
};
