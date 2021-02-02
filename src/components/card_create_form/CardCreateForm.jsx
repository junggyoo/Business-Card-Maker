import React, { useRef, useState } from "react";
import Button from "../button/Button";
import ImageFileInput from "../image_file_input/ImageFileInput";
import styles from "./CardCreateForm.module.css";

const CardCreateForm = ({ createCard }) => {
  const [newCard, setNewCard] = useState({
    name: "",
    company: "",
    theme: "",
    role: "",
    email: "",
    coment: "",
    id: "",
  });

  const formRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    createCard(newCard);
    formRef.current.reset();
  };

  const onChange = (e) => {
    const { value } = e.target;
    const { name } = e.target;
    setNewCard({ ...newCard, [name]: value, id: Date.now() });
  };
  return (
    <form className={styles.form} onSubmit={onSubmit} ref={formRef}>
      <input
        className={styles.input}
        type="text"
        name="name"
        placeholder="Name"
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        placeholder="Compony"
        onChange={onChange}
      />
      <select
        className={styles.select}
        name="theme"
        defaultValue="light"
        onChange={onChange}
      >
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="role"
        placeholder="Role"
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        placeholder="Email"
        onChange={onChange}
      />
      <textarea
        className={styles.textarea}
        name="coment"
        placeholder="Coment"
        onChange={onChange}
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardCreateForm;
