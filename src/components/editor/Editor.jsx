import React from "react";
import CardCreateForm from "../card_create_form/CardCreateForm";
import CardEditorForm from "../card_editor_form/CardEditorForm";
import styles from "./Editor.module.css";

const Editor = ({ cards, setCards }) => {
  return (
    <section className={styles.editor}>
      <h2 className={styles.title}>Card Maker</h2>
      {cards.map((card) => (
        <CardEditorForm card={card} key={card.id}  />
      ))}
      <CardCreateForm cards={cards} setCards={setCards}/>
    </section>
  );
};

export default Editor;
