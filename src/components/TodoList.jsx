export default function TodoList({
  tasks,
  onToggleTodo,
  editingId,
  editedTitle,
  setEditedTitle,
  onEditTodo,
  onConfirmEdit,
  onCancelEdit,
  onDeleteTodo,
}) {
  const sortedTasks = [
    ...tasks.filter((task) => task.completed),
    ...tasks.filter((task) => !task.completed),
  ];

  return (
    <section className="todo-list">
      {sortedTasks.map((task) => (
        <div className="todo-item" key={task.id}>
          {editingId === task.id ? (
            <>
              <input
                className="edit-input"
                type="text"
                value={editedTitle}
                onChange={(event) => setEditedTitle(event.target.value)}
              />

              <div className="todo-actions">
                <button
                  type="button"
                  onClick={() => onConfirmEdit(task.id)}
                >
                  Confirm
                </button>

                <button type="button" onClick={onCancelEdit}>
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <span className={task.completed ? "completed" : ""}>
                {task.title}
              </span>

              <div className="todo-actions">
                <input
                  type="checkbox"
                  checked={task.completed}
                  disabled={task.completed}
                  onChange={() => onToggleTodo(task.id)}
                />

                {!task.completed && (
                  <button
                    type="button"
                    onClick={() => onEditTodo(task)}
                  >
                    Edit
                  </button>
                )}

                {task.completed && (
                  <button
                    type="button"
                    onClick={() => onDeleteTodo(task.id)}
                  >
                    Delete
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      ))}
    </section>
  );
}