import React from "react";
import Card from '../card/card';
import styles from "./Preview.module.css";


const Preview = ({ cards }) => {
  return (
    <section className={styles.preview}>
      <h2 className={styles.title}>Card Preview</h2>
      {Object.keys(cards).map((key) => (
        <Card card={cards[key]} key={key} />
      ))}
    </section>
  );
};

export default Preview;
