import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <img className={styles.logoImg} src="/images/logo.png" alt="logo" />
      </div>
      <div className={styles.headerTitle}>Business Card Maker</div>
    </header>
  );
};

export default Header;
