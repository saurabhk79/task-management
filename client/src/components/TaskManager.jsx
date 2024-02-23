/* eslint-disable react/prop-types */
import Task from "./Task";

const TaskManager = ({ filteredTask }) => {
  return (
    <div className="tasks-section">
      <h1>Tasks</h1>
      {filteredTask.map((task) => (
        <Task key={task.id} title={task.taskname} isDone={task.isDone} />
      ))}
    </div>
  );
};

export default TaskManager;
