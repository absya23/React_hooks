import React, { useState } from "react";

const ToDoForm = (props) => {
  const [value, setValue] = useState("");
  const handleValueChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!props.onSubmit) return;
    const formValues = {
      title: value,
    };

    props.onSubmit(formValues);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit} action="" className="todo-form" method="">
      <input
        type="text"
        className="todo-input"
        value={value}
        onChange={handleValueChange}
      />
      <button type="submit" className="todo-submit">
        Add
      </button>
    </form>
  );
};

export default ToDoForm;
