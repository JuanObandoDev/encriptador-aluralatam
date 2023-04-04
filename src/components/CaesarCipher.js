import React from "react";
import { useContext } from "react";
import { InputContext } from "../context/inputContext";
import { CaesarDecoder } from "../hooks/caesarDecoder.js";
import { CaesarEncoder } from "../hooks/caesarEncoder.js";
import { CopyValue } from "../hooks/copyValue.js";
import styles from "../styles/CaesarCipher.module.css";

export function CaesarCipher() {
  const { input, setInput, output, setOutput } = useContext(InputContext);
  const ROT = 3;
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
            className={styles.caesarEncoderBtn}
            onClick={() => setOutput(CaesarEncoder(input, ROT))}
          >
            Enconder
          </button>
          <button
            className={styles.caesarDecoderBtn}
            onClick={() => setOutput(CaesarDecoder(input, ROT))}
          >
            Decoder
          </button>
        </div>
      </div>
      <div className={styles.out}>
        <h1 className={styles.titleOut}>Output</h1>
        <textarea
          className={styles.output}
          readonly
          value={output}
          placeholder="Wbsh dqb whaw"
        ></textarea>
        <button className={styles.copyBtn} onClick={() => CopyValue(output)}>
          Copy
        </button>
      </div>
    </div>
  );
}
