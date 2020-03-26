import React from 'react';
import styles from './Menu.css';

const Menu = ({
    open
}) => (
        <div className={styles.Menu}
        onClick={() => open()}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );

export default Menu;