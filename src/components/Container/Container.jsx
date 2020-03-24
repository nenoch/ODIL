import React from "react";
import styles from "./Container.module.css";

const Container = ({ isFluid = false, children }) => (
  <div className={isFluid ? styles.ContainerFluid : styles.Container}>{children}</div>
);

export default Container;
