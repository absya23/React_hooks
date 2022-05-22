import React, { useState } from "react";
import ToDoList from "./ToDoList";
import "./toDo.css";
import ToDoForm from "./ToDoForm";

const doList = [
  { id: 1, title: "I love Easy Frontend" },
  { id: 2, title: "We love Easy Frontend" },
  { id: 3, title: "They love Easy Frontend" },
];

const ToDoApp = () => {
  const [todoList, setTodoList] = useState(doList);

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   //

  //   // re-render lại: setTodoList(...);
  // };

  const handleTodoClick = (index) => {
    const todoCopy = [...todoList];
    todoCopy.splice(index, 1);
    setTodoList(todoCopy);
  };

  const handleSubmit = (formValues) => {
    const todoCopy = [...todoList];
    formValues.id = todoCopy.length + 1;
    todoCopy.splice(todoCopy.length + 1, 0, formValues);
    setTodoList(todoCopy);
  };

  return (
    <div className="todo-app">
      <h2 className="todo-title">TO DO LIST</h2>
      <ToDoForm onSubmit={handleSubmit}></ToDoForm>
      <ToDoList todos={todoList} onTodoClick={handleTodoClick}></ToDoList>
    </div>
  );
};

export default ToDoApp;
