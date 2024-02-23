/* eslint-disable react/prop-types */
const Task = ({ task, handleUpdate, handleDelete }) => {
  return (
    <div className="task">
      <h4>{task.title}</h4>

      <div>
        {task.isDone ? (
          <button className="undone" onChange={() => handleUpdate(task.id)}>
            Undone
          </button>
        ) : (
          <button className="done" onChange={() => handleUpdate(task.id)}>
            Done
          </button>
        )}
        <button className="delete" onChange={() => handleDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
