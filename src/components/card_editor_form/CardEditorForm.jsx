import React from "react";
import Button from "../button/Button";
import ImageFileInput from "../image_file_input/ImageFileInput";
import styles from "./CardEditorForm.module.css";

const CardEditorForm = ({ card }) => {
  const { name, company, role, email, coment, fileName, fileURL, theme } = card;
  const onSubmit = () => {};
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        onChange={() => {}}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        value={company}
        onChange={() => {}}
      />
      <select 
        className={styles.select} 
        name="theme" 
        value={theme} 
        onChange={() => {}}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input 
        className={styles.input} 
        type="text" 
        name="role" 
        value={role} 
        onChange={() => {}}/>
      <input 
        className={styles.input} 
        type="text" 
        name="email" 
        value={email} 
        onChange={() => {}}/>
      <textarea
        className={styles.textarea}
        name="coment"
        value={coment}
        onChange={() => {}}
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditorForm;
