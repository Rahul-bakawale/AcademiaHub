import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Todo = () => {
  const data = JSON.parse(localStorage.getItem("todoList")) || [];

  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState(data);
  const [editTodo, setEditTodo] = useState();
  console.log("value", value, todoList, editTodo);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value.trim()) return;
    if (editTodo) {
      const updatedList = [...todoList];
      updatedList[editTodo] = value;
      setTodoList(updatedList);
      localStorage.setItem("todoList", JSON.stringify(updatedList));
      setEditTodo(null);
    } else {
      const updatedList = [...todoList, value];
      setTodoList(updatedList);
      localStorage.setItem("todoList", JSON.stringify(updatedList));
    }
    // const updatedList = [...todoList, value];
    // setTodoList(updatedList);
    // localStorage.setItem("todoList", JSON.stringify(updatedList));
    setValue("");
  };
  const handleEdit = (index) => {
    setValue(todoList[index]);
    setEditTodo(index);
  };

  return (
    <>
      <input
        type="text"
        value={value}
        name="value"
        placeholder="Enter"
        onChange={handleChange}
      />
      {/* <Button onClick={handleSubmit}>{editTodo ? "Update" : "Add"}</Button> */}
      <Button onClick={handleSubmit}>
        {editTodo !== null ? "Update" : "Add"}
      </Button>

      <br />
      <ol>
        {todoList.map((items, index) => (
          <>
            <li key={index}>
              {items} <Button onClick={() => handleEdit(index)}>Edit</Button>
            </li>
          </>
        ))}
      </ol>
    </>
  );
};

export default Todo;
