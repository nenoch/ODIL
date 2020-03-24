import React from "react";
import styles from "./Column.module.css";

const Column = ({ width, children }) => (
  <div className={styles[`Col-${width}`]}>{children}</div>
);

export default Column;