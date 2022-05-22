import React from "react";

const ToDoList = (props) => {
  return (
    <ul className="todo-list">
      {props.todos &&
        props.todos.map((item, index) => (
          <li
            key={index}
            className="todo-item"
            onClick={() => props.onTodoClick(index)}
          >
            {`${index + 1}. ${item.title}`}
          </li>
        ))}
      {props.todos.length === 0 && (
        <span className="todo-note">It is empty.</span>
      )}
    </ul>
  );
};

export default ToDoList;
