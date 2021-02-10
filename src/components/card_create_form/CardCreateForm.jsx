import React, { memo, useRef, useState } from "react";
import Button from "../button/Button";
import styles from "./CardCreateForm.module.css";

const CardCreateForm = memo(({ FileInput, createCard }) => {
  const [file, setFile] = useState({ fileName: null, fileURL: null });
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const roleRef = useRef();
  const emailRef = useRef();
  const comentRef = useRef();
  const formRef = useRef();

  const onFileChange = (file) => {
    setFile({ fileName: file.name, fileURL: file.url });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      theme: themeRef.current.value || "",
      role: roleRef.current.value || "",
      email: emailRef.current.value || "",
      coment: comentRef.current.value || "",
      fileName: file.fileName || "",
      fileURL: file.fileURL || "",
    };
    createCard(card);
    setFile({ fileName: null, fileURL: null });
    formRef.current.reset();
  };

  return (
    <form className={styles.form} onSubmit={onSubmit} ref={formRef}>
      <input
        className={styles.input}
        type="text"
        name="name"
        placeholder="Name"
        ref={nameRef}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        placeholder="Compony"
        ref={companyRef}
      />
      <select
        className={styles.select}
        name="theme"
        defaultValue="light"
        ref={themeRef}
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
        ref={roleRef}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        placeholder="Email"
        ref={emailRef}
      />
      <textarea
        className={styles.textarea}
        name="coment"
        placeholder="Coment"
        ref={comentRef}
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput onFileChange={onFileChange} name={file.fileName} />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
});

export default CardCreateForm;
