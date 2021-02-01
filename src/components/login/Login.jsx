import React from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import styles from "./Login.module.css";

const Login = ({ authService }) => {
  const history = useHistory();

  const onLogin = (event) => {
    authService
      .login(event.currentTarget.textContent) //
      .then((result) => {
        const credential = result.credential;
        const token = credential.accessToken;
        if (token) {
          history.push("/main");
        }
      });
  };

  return (
    <section className={styles.loginWrapper}>
      <div className={styles.loginContainer}>
        <Header />
        <section className={styles.login}>
          <h1>Login</h1>
          <ul className={styles.buttonContainer}>
            <li>
              <button className={styles.loginButton} onClick={onLogin}>
                Google
              </button>
            </li>
            <li>
              <button className={styles.loginButton} onClick={onLogin}>
                
                
                Github
              
              
              </button>
            </li>
          </ul>
        </section>
        <Footer />
      </div>
    </section>
  );
};

export default Login;
