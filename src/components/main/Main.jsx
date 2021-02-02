import React, { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useHistory } from "react-router-dom";
import styles from "./Main.module.css";
import Editor from "../editor/Editor";
import Preview from "../preview/Preview";

const Main = ({ authService }) => {
  const [cards, setCards] = useState({
    '1': {
      id: "1",
      name: "Ellie Dream Coding",
      company: "Samsung Electronics",
      role: "Software Engineer",
      email: "dream.corder.ellie@gmail.com",
      coment: `"Don't forget to code your dream"`,
      fileName: "eric",
      fileURL: "/images/default_logo.png",
      theme: "dark",
    },
    '2': {
      id: "2",
      name: "Bob",
      company: "Uber",
      role: "Software Engineer",
      email: "bob@uber.com",
      coment: `"I love coding"`,
      fileName: "eric",
      fileURL: "/images/default_logo.png",
      theme: "light",
    },
    '3': {
      id: "3",
      name: "Chris",
      company: "Instargram",
      role: "Project Manager",
      email: "chris@instargram.com",
      coment: `"Dessign your dream"`,
      fileName: "eric",
      fileURL: "/images/default_logo.png",
      theme: "colorful",
    },
  });

  const deleteCard = (card) => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    })
  };

  const createOrUpdateCard = (card) => {
    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    })
  };

  const history = useHistory();
  const onLogout = () => {
    authService
      .logout() //
      .then(() => history.push("/"));
  };

  return (
    <>
      <Header onLogout={onLogout} />
      <main className={styles.mainContainer}>
        <Editor
          cards={cards}
          createCard={createOrUpdateCard}
          deleteCard={deleteCard}
          updateCard={createOrUpdateCard}
        />
        <Preview cards={cards} setCards={setCards} />
      </main>
      <Footer />
    </>
  );
};

export default Main;
