import { useState } from "react";

export default function TodoInput({ tasks, setTasks }) {
  const [title, setTitle] = useState("");

  function handleAddTodo() {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTitle("");
  }

  return (
    <section className="todo-input">
      <h2>TodoInput</h2>

      <input
        type="text"
        placeholder="New Todo"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <button type="button" onClick={handleAddTodo}>
        Add new task
      </button>
    </section>
  );
}