import React, { memo } from "react";
import styles from "./Footer.module.css";

const Footer = memo(() => {
  return (
    <footer className={styles.footer}>
      <p>@ Code your dream</p>
    </footer>
  );
});

export default Footer;
