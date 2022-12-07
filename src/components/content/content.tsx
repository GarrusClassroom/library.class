import classNames from 'classnames';

import { BOOKS } from '../../constants/books';
import { MenuViewEnum } from '../../constants/menu-view';
import { Card } from '../card';

import styles from './content.module.scss';

type ContentProps = {
    menuView: string;
};

export const Content = ({ menuView }: ContentProps) => (
    <main data-test-id='content-table'>
        <ul
            className={classNames(
                menuView === MenuViewEnum.window ? styles.viewWindow : styles.viewList,
            )}
        >
            {BOOKS.map(
                ({ img, rating, title, authors, year, status, userIdReserved, date, id }) => (
                    <Card
                        img={img}
                        rating={rating}
                        title={title}
                        authors={authors}
                        year={year}
                        status={status}
                        userIdReserved={userIdReserved}
                        date={date}
                        menuView={menuView}
                        id={id}
                        key={id}
                    />
                ),
            )}
        </ul>
    </main>
);
