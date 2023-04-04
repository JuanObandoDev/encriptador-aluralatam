import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const InputContext = createContext();

export default function InputContextProvider({ children }) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [page, setPage] = useState(0);
  return (
    <InputContext.Provider
      value={{ input, setInput, output, setOutput, page, setPage }}
    >
      {children}
    </InputContext.Provider>
  );
}
