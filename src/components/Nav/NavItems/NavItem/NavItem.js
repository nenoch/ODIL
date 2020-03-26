import React from 'react';
import styles from './NavItem.css';

const NavItem = ({
    children,
    link,
    active
}) => (
    <li className={styles.NavItem}>
        <a href={link}
        className={active ? styles.active : null}>{children}</a>
    </li>
);

export default NavItem;