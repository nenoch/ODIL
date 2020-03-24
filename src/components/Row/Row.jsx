import React from "react";
import styles from "./Row.module.css";

const Row = ({ children, isFDCol = "false" }) => (
  <div className={isFDCol? styles.RowFDCol : styles.Row}>{children}</div>
);

export default Row;