import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <section className={styles.loginWrapper}>
      <div className={styles.loginContainer}>
        <Header />
        <section className={styles.login}>
          <h1>Login</h1>
          <ul className={styles.buttonContainer}>
            <li>
              <button className={styles.loginButton} onClick={() => {}}>
                Google
              </button>
            </li>
            <li>
              <button className={styles.loginButton}>Github</button>
            </li>
          </ul>
        </section>
        <Footer />
      </div>
    </section>
  );
};

export default Login;
