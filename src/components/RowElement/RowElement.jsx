import React from "react";
import styles from "./RowElement.module.css";

const RowElement = ({ left = false, children }) => (
  <div className={ left ? styles.RowElementLeft : styles.RowElement}>{children}</div>
);

export default RowElement;