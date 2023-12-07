import React, {useState } from "react";
import { todos } from "../../Type/Type";
import "./index.css";
const TodoListComponent = () => {
  const [inpValue, setInpValue] = useState<string>("");
  const [todos, setTodos] = useState<todos[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInpValue(e.target.value);
  };

  const handleClick = () => {
    if (inpValue) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: inpValue,
          completed: false,
        },
      ]);
      setInpValue("");
    }
  };

  const handleRemove = (id: number) => {
    setTodos(todos.filter((x) => x.id !== id));
  };

  const handleDone = (id: number) => {
    const selectedTodoIndex = todos.findIndex((x) => x.id === id);
    console.log(todos[selectedTodoIndex].completed);

    todos[selectedTodoIndex].completed = !todos[selectedTodoIndex].completed;
    setTodos([...todos]);
  };

  return (
    <div>
      <input type="text" value={inpValue} onChange={handleChange} />
      <button onClick={handleClick}>add</button>
      {todos.map((x) => (
        <li key={x.id}>
          <span className={x.completed ? "checked" : ""}>{x.text}</span>
          <button onClick={() => handleRemove(x.id)}>del</button>
          <button>edit</button>
          <button onClick={() => handleDone(x.id)}>done</button>
        </li>
      ))}
    </div>
  );
};

export default TodoListComponent;
