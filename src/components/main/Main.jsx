import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useHistory } from "react-router-dom";
import styles from "./Main.module.css";

const Main = ({ authService }) => {
  const history = useHistory();
  const onLogout = () => {
    authService
      .logout() //
      .then(() => history.push("/"));
  };

  return (
    <>
      <Header onLogout={onLogout} />
      <main className={styles.mainContainer}>
        <section>Card Maker</section>
        <section>Card Preview</section>
      </main>
      <Footer />
    </>
  );
};

export default Main;
