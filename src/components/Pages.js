import React from "react";
import { useContext } from "react";
import { InputContext } from "../context/inputContext";
import { CaesarCipher } from "./CaesarCipher";
import { AluraEncoderDecoder } from "./AluraEncoderDecoder";

export function Pages() {
  const { page } = useContext(InputContext);
  return (
    <>
      {page === 0 ? (
        <>
          <CaesarCipher />
        </>
      ) : (
        <>
          <AluraEncoderDecoder />
        </>
      )}
    </>
  );
}
