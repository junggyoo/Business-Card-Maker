import React from "react";
import CardEditorForm from "../card_editor_form/CardEditorForm";
import styles from "./Editor.module.css";

const Editor = ({ cards }) => {
  return (
    <section className={styles.editor}>
      <h2 className={styles.title}>Card Maker</h2>
      {cards.map((card) => (
        <CardEditorForm card={card}  />
      ))}
    </section>
  );
};

export default Editor;
