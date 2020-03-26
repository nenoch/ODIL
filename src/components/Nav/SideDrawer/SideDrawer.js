import React from 'react';
import cx from 'classnames';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import Backdrop from '../../Backdrop/Backdrop';
import styles from './SideDrawer.css';

const SideDrawer = ({
    closeSide,
    status
}) => {
    return (
        <>
            <Backdrop show={status} clicked={closeSide} />
            <div className={cx(
                styles.SideDrawer,
                status ? styles.Open : styles.Close)}>
                <div className={styles.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavItems />
                </nav>
            </div>
        </>
    )
};

export default SideDrawer;