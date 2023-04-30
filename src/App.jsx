import React from "react";

import { AluraEncoderDecoder } from "./components/EncoderDecoder/AluraEncoderDecoder";
import InputContextProvider from "./context/inputContext/inputContext";

import "./styles/App.css";

function App() {
  return (
    <InputContextProvider>
      <p className="logo">a</p>
      <AluraEncoderDecoder />
    </InputContextProvider>
  );
}

export default App;
