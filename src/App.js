import "./styles/App.css";
import React from "react";
import { Pages } from "./components/Pages";
import { Header } from "./components/Header";
import InputContextProvider from "./context/inputContext";

function App() {
  return (
    <InputContextProvider>
      <Header />
      <Pages />
    </InputContextProvider>
  );
}

export default App;
