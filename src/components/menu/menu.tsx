import { useState } from 'react';
import classNames from 'classnames';

import { MenuViewEnum } from '../../constants/menu-view';
import { Button } from '../button';
import { Search } from '../search';

import displayList from './assets/icon-line.svg';
import displayListActive from './assets/icon-line-active.svg';
import displayWindow from './assets/icon-square.svg';
import displayWindowActive from './assets/icon-square-active.svg';
import buttonFilter from './assets/sort.svg';

import styles from './menu.module.scss';

export type MenyProps = {
    menuView: MenuViewEnum;
    setMenuView: (onChangeText: MenuViewEnum) => void;
};

export const Menu = ({ menuView, setMenuView }: MenyProps) => {
    const [isSearhView, setSearhView] = useState(true);

    return (
        <div className={classNames(styles.menu, !isSearhView && styles.menuSearh)}>
            <div
                className={classNames(
                    styles.searchSortBlock,
                    !isSearhView && styles.searchSortBlockNoGap,
                )}
            >
                <Search isSearhView={isSearhView} setSearhView={setSearhView} />
                <Button
                    classButton={classNames(styles.buttonSort, !isSearhView && styles.buttonHidden)}
                >
                    <img src={buttonFilter} alt='icon-sort' />
                    <span className={styles.buttonSortText}>По рейтингу</span>
                </Button>
            </div>
            {isSearhView && (
                <div className={styles.display}>
                    <Button
                        classButton={classNames(
                            styles.buttonDisplay,
                            menuView === MenuViewEnum.window && styles.buttonDisplayActive,
                        )}
                        onClick={() => {
                            setMenuView(MenuViewEnum.window);
                        }}
                    >
                        <img
                            src={
                                menuView === MenuViewEnum.window
                                    ? displayWindowActive
                                    : displayWindow
                            }
                            alt='icon-window'
                        />
                    </Button>

                    <Button
                        classButton={classNames(
                            styles.buttonDisplay,
                            menuView === MenuViewEnum.list && styles.buttonDisplayActive,
                        )}
                        onClick={() => {
                            setMenuView(MenuViewEnum.list);
                        }}
                    >
                        <img
                            src={menuView === MenuViewEnum.list ? displayListActive : displayList}
                            alt='icon-list'
                        />
                    </Button>
                </div>
            )}
        </div>
    );
};
