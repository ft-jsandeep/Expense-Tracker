import React from "react";
import styles from "./Header.module.css";

export default function Header(props) {
  // const [showHam, setShowHam] = useState(false);
  // const hamburgerHandler = () => {
  //   setShowHam(!showHam);
  //   props.onHamClick(showHam);
  // };
  return (
    <div className={styles.header}>
      {/* <div
        className={`${styles["menu-btn"]} ${showHam && styles.open}`}
        onClick={hamburgerHandler}
      >
        <div className={styles["menu-btn__burger"]}></div>
      </div> */}
      <h1 className={styles["header-logo"]}>Expense Tracker</h1>
    </div>
  );
}
