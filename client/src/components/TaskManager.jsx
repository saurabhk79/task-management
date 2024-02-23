/* eslint-disable react/prop-types */
import Task from "./Task";

const TaskManager = ({ filteredTasks, handleDelete, handleUpdate }) => {
  return (
    <div className="tasks-section">
      <h1>Tasks</h1>
      {filteredTasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
    </div>
  );
};

export default TaskManager;
