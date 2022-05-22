import React from "react";
import "./App.css";
import Card from "./components/card/Card";
import ToDoApp from "./components/todolist/ToDoApp";
// import ColorBox from "./components/colorBox/ColorBox";
// import "./App.scss";

function App() {
  return (
    <div className="App">
      {/* <ColorBox></ColorBox> */}
      {/* <ToDoApp></ToDoApp> */}
      <Card></Card>
    </div>
  );
}

export default App;
