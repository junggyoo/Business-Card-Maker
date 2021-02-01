import React from "react";
import styles from "./Header.module.css";

const Header = ({ onLogout }) => {
  return (
    <header className={styles.header}>
      {onLogout && (
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      )}
      <img className={styles.logoImg} src="/images/logo.png" alt="logo" />
      <h1 className={styles.headerTitle}>Business Card Maker</h1>
    </header>
  );
};

export default Header;
