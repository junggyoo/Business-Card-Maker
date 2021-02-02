import React from "react";
import styles from "./card.module.css";

const DEFAULT_IMAGE = "/images/default_logo.png";

const card = ({ card }) => {
  const { id, fileURL, name, company, role, email, coment, theme } = card;
  const url = fileURL || DEFAULT_IMAGE;
  return (
    <article className={`${styles.card} ${getStyles(theme)}`} key={id}>
      <img className={styles.profileImg} src={url} alt="profile" />
      <div className={styles.profile}>
        <h3>{name}</h3>
        <p className={styles.company}>{company}</p>
        <p>{role}</p>
        <p>{email}</p>
        <p>{coment}</p>
      </div>
    </article>
  );
};

function getStyles(theme) {
  switch (theme) {
    case "dark":
      return styles.dark;
    case "light":
      return styles.light;
    case "colorful":
      return styles.colorful;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
}

export default card;
