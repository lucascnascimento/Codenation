import React from "react";
import "./App.css";

import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button name="Todos" />
        <Button name="Vivo" />
        <Button name="Morto" />
        <Button name="Desconhecido" />
      </header>
    </div>
  );
}

export default App;
