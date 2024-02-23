/* eslint-disable react/prop-types */
const Task = ({ task, handleUpdate, handleDelete }) => {
  return (
    <div className="task">
      <h2>{task.taskname}</h2>
      <p>{task.desc}</p>
      <div className="btn-grp">
        {task.isDone ? (
          <button className="undone" onClick={() => handleUpdate(task.id)}>
            Undone
          </button>
        ) : (
          <button className="done" onClick={() => handleUpdate(task.id)}>
            Done
          </button>
        )}
        <button className="delete" onClick={() => handleDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
