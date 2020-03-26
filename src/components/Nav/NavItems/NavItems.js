import React from 'react';
import styles from './NavItems.css';
import NavItem from './NavItem/NavItem';

const NavItems = (props) => (
    <ul className={styles.NavItems}>
        {/* {props.navItems.map(navItem => {
            <NavItem
                link={navItem.link}
                active={navItem.active}
            >Hello</NavItem>
        })} */}
        <NavItem
            link='/'
            active
        >Hello</NavItem>
        <NavItem
            link='/'
        >Bye</NavItem>
    </ul>
);

export default NavItems;