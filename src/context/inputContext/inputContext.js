import React, { createContext, useState } from "react";

export const InputContext = createContext();

export default function InputContextProvider({ children }) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("Any message was found");
  return (
    <InputContext.Provider value={{ input, setInput, output, setOutput }}>
      {children}
    </InputContext.Provider>
  );
}
