import React from "react";
import Button from "../button/Button";
import ImageFileInput from "../image_file_input/ImageFileInput";
import styles from "./CardEditorForm.module.css";

const CardEditorForm = ({ card, deleteCard, updateCard }) => {
  const { name, company, role, email, coment, fileName, fileURL, theme } = card;

  const onSubmit = () => {
    deleteCard(card);
  }

  const handleChange = (e) => {
    if (e.currentTarget == null) {
      return;
    }
    e.preventDefault();
    const {name, value} = e.currentTarget;
    updateCard({
      ...card, [name]: value
    })
  }
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        value={company}
        onChange={handleChange}
      />
      <select 
        className={styles.select} 
        name="theme" 
        value={theme} 
        onChange={handleChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input 
        className={styles.input} 
        type="text" 
        name="role" 
        value={role} 
        onChange={handleChange} />
      <input 
        className={styles.input} 
        type="text" 
        name="email" 
        value={email} 
        onChange={handleChange} />
      <textarea
        className={styles.textarea}
        name="coment"
        value={coment}
        onChange={handleChange}
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Delete" type="submit" />
    </form>
  );
};

export default CardEditorForm;
