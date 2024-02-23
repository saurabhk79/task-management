import "./App.css";
import Searchbar from "./components/Searchbar";
import TaskManager from "./components/TaskManager";

function App() {
  return (
    <div className="App">
      <div className="card">
        <Searchbar />
        <TaskManager />
      </div>
    </div>
  );
}

export default App;
