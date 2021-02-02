import React from "react";
import Card from '../card/card';
import styles from "./Preview.module.css";


const Preview = ({ cards }) => {
  return (
    <section className={styles.preview}>
      <h2 className={styles.title}>Card Preview</h2>
      {cards.map((card) => (
        <Card card={card}/>
      ))}
      
    </section>
  );
};

export default Preview;
