import React from "react";
import styles from "../styles/Header.module.css";
import { useContext } from "react";
import { InputContext } from "../context/inputContext";

export function Header() {
  const { page, setPage, setInput, setOutput } = useContext(InputContext);
  return (
    <header className={styles.pagesBtns}>
      <button
        onClick={() => {
          setPage(0);
          setInput("");
          setOutput("");
        }}
        className={`${styles.caesarCipherBtn} ${
          page === 0 ? styles.active : ""
        }`}
        disabled={page === 0}
      >
        Caesar Cipher
      </button>
      <button
        onClick={() => {
          setPage(1);
          setInput("");
          setOutput("");
        }}
        className={`${styles.aluraEncoderBtn} ${
          page === 1 ? styles.active : ""
        }`}
        disabled={page === 1}
      >
        Alura Encoder
      </button>
    </header>
  );
}
