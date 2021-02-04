import React from "react";
import CardCreateForm from "../card_create_form/CardCreateForm";
import CardEditorForm from "../card_editor_form/CardEditorForm";
import styles from "./Editor.module.css";

const Editor = ({ FileInput, cards, updateCard, deleteCard, createCard }) => {
  return (
    <section className={styles.editor}>
      <h2 className={styles.title}>Card Maker</h2>
      {Object.keys(cards).map((key) => (
        <CardEditorForm 
          key={key} 
          FileInput={FileInput} 
          card={cards[key]} 
          deleteCard={deleteCard} 
          updateCard={updateCard} />
      ))}
      <CardCreateForm 
        FileInput={FileInput} 
        cards={cards} 
        createCard={createCard}
      />
    </section>
  );
};

export default Editor;
