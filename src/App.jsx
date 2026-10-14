import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoFilters from "./components/TodoFilters";
import TodoList from "./components/TodoList";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([
  ]);

  const [editingId, setEditingId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [filter, setFilter] = useState("All");

  function handleToggleTodo(id) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  }

  function handleEditTodo(task) {
    setEditingId(task.id);
    setEditedTitle(task.title);
  }

  function handleConfirmEdit(id) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id && !task.completed
          ? { ...task, title: editedTitle }
          : task
      )
    );

    setEditingId(null);
    setEditedTitle("");
  }

  function handleCancelEdit() {
    setEditingId(null);
    setEditedTitle("");
  }

  function getFilteredTasks() {
    if (filter === "Done") {
      return tasks.filter((task) => task.completed);
    }

    if (filter === "Todo") {
      return tasks.filter((task) => !task.completed);
    }

    return tasks;
  }

  function handleDeleteTodo(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this todo?"
    );

    if (!confirmed) {
      return;
    }

    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id)
    );
  }

  return (
    <main className="app">
      <h1>Todo List</h1>

      <TodoInput tasks={tasks} setTasks={setTasks} />

      {tasks.length === 0 ? (
        <p className="empty-message">No todo is available</p>
      ) : (
        <>
          <TodoFilters filter={filter} setFilter={setFilter} />

          <TodoList
            tasks={getFilteredTasks()}
            onToggleTodo={handleToggleTodo}
            editingId={editingId}
            editedTitle={editedTitle}
            setEditedTitle={setEditedTitle}
            onEditTodo={handleEditTodo}
            onConfirmEdit={handleConfirmEdit}
            onCancelEdit={handleCancelEdit}
            onDeleteTodo={handleDeleteTodo}
          />
        </>
      )}
    </main>
  );
}