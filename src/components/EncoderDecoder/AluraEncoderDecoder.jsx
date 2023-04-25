import React from "react";
import { useContext } from "react";
import { InputContext } from "../../context/inputContext/inputContext";
import { AluraDecoder } from "../../hooks/useAluraDecoder/useAluraDecoder.js";
import { AluraEncoder } from "../../hooks/useAluraEncoder/useAluraEncoder.js";
import { CopyValue } from "../../hooks/useCopyValue/useCopyValue.js";
import styles from "../../styles/AluraEncoderDecoder.module.css";

export function AluraEncoderDecoder() {
  const { input, setInput, output, setOutput } = useContext(InputContext);
  const aluraDictionary = {
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
          onChange={(e) => {
            setInput(e.target.value.toLowerCase());
            setOutput("");
          }}
          placeholder="Type any text"
        ></textarea>
        <div className={styles.Btns}>
          <button
            className={styles.aluraEncoderBtn}
            onClick={() => setOutput(AluraEncoder(input, aluraDictionary))}
          >
            Enconder
          </button>
          <button
            className={styles.aluraDecoderBtn}
            onClick={() => setOutput(AluraDecoder(input, aluraDictionary))}
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
