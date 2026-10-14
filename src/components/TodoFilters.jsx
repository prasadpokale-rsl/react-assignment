export default function TodoFilters({ filter, setFilter }) {
  const filters = ["All", "Done", "Todo"];

  return (
    <section className="todo-filters">
      {filters.map((item) => (
        <button
          key={item}
          type="button"
          className={filter === item ? "selected-filter" : ""}
          onClick={() => setFilter(item)}
        >
          {item}
        </button>
      ))}
    </section>
  );
}