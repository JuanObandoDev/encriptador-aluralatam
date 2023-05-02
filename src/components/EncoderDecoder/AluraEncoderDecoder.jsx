import React, { useContext } from "react";

import { InputContext } from "../../context/inputContext/inputContext";
import { aluraDecoder } from "../../utils/alura-decoder/aluraDecoder.js";
import { aluraEncoder } from "../../utils/alura-encoder/aluraEncoder.js";
import { copyValue } from "../../utils/copy-value/copyValue.js";

import styles from "../../styles/AluraEncoderDecoder.module.css";

const aluraDictionary = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

export function AluraEncoderDecoder() {
  const { input, setInput, output, setOutput } = useContext(InputContext);

  return (
    <div className={styles.main}>
      <div className={styles.entry}>
        <h1 className={styles.titleEntry}>Entry</h1>
        <textarea
          className={styles.input}
          onChange={(e) => {
            setInput(e.target.value.toLowerCase());
            setOutput("");
          }}
          placeholder="Type any text"
        ></textarea>
        <div className={styles.Btns}>
          <button
            className={styles.aluraEncoderBtn}
            onClick={() => setOutput(aluraEncoder(input, aluraDictionary))}
          >
            Enconder
          </button>
          <button
            className={styles.aluraDecoderBtn}
            onClick={() => setOutput(aluraDecoder(input, aluraDictionary))}
          >
            Decoder
          </button>
        </div>
      </div>
      <div className={styles.out}>
        <h1 className={styles.titleOut}>Output</h1>
        <p className={styles.output}>{output}</p>
        <button className={styles.copyBtn} onClick={() => copyValue(output)}>
          Copy
        </button>
      </div>
    </div>
  );
}
