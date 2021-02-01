import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import styles from "./Login.module.css";

const Login = ({ authService }) => {
  const history = useHistory();

  const goToMain = (userId) => {
    history.push({
      pathname: "/main",
      state: { id: userId },
    });
  };

  const onLogin = (event) => {
    authService
      .login(event.currentTarget.textContent) //
      .then((result) => goToMain(result.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMain(user.uid);
    });
  }, []);
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
