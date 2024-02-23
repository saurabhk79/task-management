import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Searchbar = ({ handleAddTask, handleSetFilter }) => {
  const [task, setTask] = useState("");

  const handleSubmit = () => {
    if (task.length !== 0) handleAddTask(task);
  };

  return (
    <div>
      <form className="add-task" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a todo..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <div className="filter">
        <select
          name="filter"
          id="filter"
          onChange={(e) => handleSetFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="done">Done</option>
          <option value="pending">Pending</option>
        </select>
      </div>
    </div>
  );
};

export default Searchbar;
