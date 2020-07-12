import React from "react";
import Board from "./components/Board.js";
import { Provider as TodoCardProvider } from "./context/TodoCardContext";
import { Provider as SubtaskProvider } from "./context/SubtaskContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default () => {
  return (
    <TodoCardProvider>
      <SubtaskProvider>
        <App />
      </SubtaskProvider>
    </TodoCardProvider>
  );
};
