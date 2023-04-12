import React from "react";
import { useContext } from "react";
import { InputContext } from "../context/inputContext";
import { AluraDecoder } from "../hooks/aluraDecoder.js";
import { AluraEncoder } from "../hooks/aluraEncoder.js";
import { CopyValue } from "../hooks/copyValue.js";
import styles from "../styles/AluraEncoderDecoder.module.css";

export function AluraEncoderDecoder() {
  const { input, setInput, output, setOutput } = useContext(InputContext);
  const vowels = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };

  return (
    <div className={styles.main}>
      <div className={styles.entry}>
        <h1 className={styles.titleEntry}>Entry</h1>
        <textarea
          className={styles.input}
          onChange={(e) => setInput(e.target.value.toLowerCase())}
          placeholder="Type any text"
        ></textarea>
        <div className={styles.Btns}>
          <button
            className={styles.aluraEncoderBtn}
            onClick={() => setOutput(AluraEncoder(input, vowels))}
          >
            Enconder
          </button>
          <button
            className={styles.aluraDecoderBtn}
            onClick={() => setOutput(AluraDecoder(input, vowels))}
          >
            Decoder
          </button>
        </div>
      </div>
      <div className={styles.out}>
        <h1 className={styles.titleOut}>Output</h1>
        <p className={styles.output}>{output}</p>
        <button className={styles.copyBtn} onClick={() => CopyValue(output)}>
          Copy
        </button>
      </div>
    </div>
  );
}
