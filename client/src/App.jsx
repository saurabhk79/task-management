import { useEffect, useState } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import TaskManager from "./components/TaskManager";

function App() {
  const URL = "https://task-management-5zmk.onrender.com";

  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    async function getTasks() {
      const res = await fetch(URL);
      const data = await res.json();

      setTasks(data);
      setFilteredTasks(data);
    }

    getTasks();
  }, []);

  const handleAddTask = async (taskname, desc) => {
    try {
      const res = await fetch(URL + "/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ taskname, desc }),
      });

      if (!res.ok) {
        throw new Error("Failed to add task");
      }

      const data = await res.json();

      setTasks(data);
      setFilteredTasks(data);
    } catch (error) {
      console.error("Error adding task:", error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(URL + `/tasks/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete task");
      }

      const data = await res.json();
      setTasks(data);
      setFilteredTasks(data);
    } catch (error) {
      console.error("Error deleting task:", error.message);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const task = tasks.find((val) => val.id === id);

      const res = await fetch(URL + `/tasks/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isDone: task.isDone === 0 ? 1 : 0 }),
      });

      if (!res.ok) {
        throw new Error("Failed to update task");
      }

      const data = await res.json();
      setTasks(data);
      setFilteredTasks(data);
    } catch (error) {
      console.error("Error updating task:", error.message);
    }
  };

  const handleSetFilter = (val) => {
    const newTasks = [...tasks];
    switch (val) {
      case "all":
        setFilteredTasks(newTasks);
        break;
      case "done":
        setFilteredTasks(newTasks.filter((val) => val.isDone === 1));
        break;
      case "pending":
        setFilteredTasks(newTasks.filter((val) => val.isDone === 0));
        break;
      default:
        setFilteredTasks(tasks);
    }
  };

  return (
    <div className="App">
      <div className="card">
        <h1>Task manager</h1>
        <Searchbar
          handleAddTask={handleAddTask}
          handleSetFilter={handleSetFilter}
        />
        <TaskManager
          filteredTasks={filteredTasks}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      </div>
    </div>
  );
}

export default App;
