import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Searchbar = ({ handleAddTask, handleSetFilter }) => {
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    if (task.length !== 0 && desc.length !== 0) {
      handleAddTask(task, desc);
      setDesc("");
      setTask("");
    }
  };

  return (
    <div>
      <form className="add-task" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <textarea
          cols="30"
          rows="10"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        ></textarea>
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
