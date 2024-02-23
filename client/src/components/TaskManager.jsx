/* eslint-disable react/prop-types */
import Task from "./Task";

const TaskManager = ({ filteredTasks }) => {
  return (
    <div className="tasks-section">
      <h1>Tasks</h1>
      {filteredTasks.map((task) => (
        <Task key={task.id} title={task.taskname} isDone={task.isDone} desc={task.desc} />
      ))}
    </div>
  );
};

export default TaskManager;
