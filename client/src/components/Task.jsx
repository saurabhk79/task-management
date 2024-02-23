// eslint-disable-next-line react/prop-types
const Task = ({ title, isDone }) => {
  return (
    <div className="task">
      <h4>{title}</h4>

      <div>
        {isDone ? (
          <button className="undone">Undone</button>
        ) : (
          <button className="done">Done</button>
        )}
        <button className="delete">Delete</button>
      </div>
    </div>
  );
};

export default Task;
