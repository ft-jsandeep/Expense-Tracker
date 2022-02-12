import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles["header-logo"]}>Expense-Tracker</h1>
    </div>
  );
}
