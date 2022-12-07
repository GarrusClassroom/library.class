import classNames from 'classnames';

import styles from './button-menu-burger.module.scss';

export type MenyBurgerProps = {
    isButtonState: boolean;
    setButtonState: (state: boolean) => void;
};

export const ButtonMenuBurger = ({ isButtonState, setButtonState }: MenyBurgerProps) => (
    <button
        data-test-id='burger-menu-button'
        className={styles.buttonMenuBurger}
        onClick={() => {
            setButtonState(!isButtonState);
        }}
        type='button'
    >
        <div className={classNames(styles.buttonMenu, isButtonState && styles.buttonMenuClose)}>
            <hr className={classNames(styles.line, styles.lineFirst)} />
            <hr className={classNames(styles.line, styles.lineSecond)} />
            <hr className={classNames(styles.line, styles.lineThird)} />
            <hr className={classNames(styles.line, styles.lineFouth)} />
        </div>
    </button>
);
