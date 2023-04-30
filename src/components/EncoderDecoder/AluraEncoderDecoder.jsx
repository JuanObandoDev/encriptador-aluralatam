import React, { useContext } from "react";

import { InputContext } from "../../context/inputContext/inputContext";
import { UseAluraDecoder } from "../../hooks/useAluraDecoder/useAluraDecoder.js";
import { UseAluraEncoder } from "../../hooks/useAluraEncoder/useAluraEncoder.js";
import { UseCopyValue } from "../../hooks/useCopyValue/useCopyValue.js";

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
            onClick={() => setOutput(UseAluraEncoder(input, aluraDictionary))}
          >
            Enconder
          </button>
          <button
            className={styles.aluraDecoderBtn}
            onClick={() => setOutput(UseAluraDecoder(input, aluraDictionary))}
          >
            Decoder
          </button>
        </div>
      </div>
      <div className={styles.out}>
        <h1 className={styles.titleOut}>Output</h1>
        <p className={styles.output}>{output}</p>
        <button className={styles.copyBtn} onClick={() => UseCopyValue(output)}>
          Copy
        </button>
      </div>
    </div>
  );
}
