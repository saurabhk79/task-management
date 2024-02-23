import { useEffect, useState } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import TaskManager from "./components/TaskManager";

function App() {
  const URL = "http://localhost:9872";

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

  return (
    <div className="App">
      <div className="card">
        <Searchbar />
        <TaskManager filteredTasks={filteredTasks} />
      </div>
    </div>
  );
}

export default App;
