import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useHistory } from "react-router-dom";
import styles from "./Main.module.css";
import Editor from "../editor/Editor";
import Preview from "../preview/Preview";

const Main = ({ authService, FileInput, cardRepository }) => {
  const historyState = useHistory().state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
  };

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };

  const history = useHistory();
  const onLogout = () => {
    authService
      .logout() //
      .then(() => history.push("/"));
  };

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, (cards) => {
      setCards(cards);
    });
    return () => stopSync();
  }, [userId]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push("/");
      }
    });
  });

  return (
    <>
      <Header onLogout={onLogout} />
      <main className={styles.mainContainer}>
        <Editor
          FileInput={FileInput}
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
