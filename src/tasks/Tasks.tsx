import { useContext } from "react";
import TasksContext from "./tasksContext";

const Tasks = () => {
  const { tasks, dispatch } = useContext(TasksContext);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Tasks</h2>
      <div>
        <button
          className="btn btn-primary mb-3"
          onClick={() =>
            dispatch({
              type: "ADD",
              task: { id: Date.now(), title: "Task " + (tasks.length + 1) },
            })
          }
        >
          Add Task
        </button>
      </div>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {task.title}

            <button
              className="btn btn-danger"
              onClick={() => dispatch({ type: "DELETE", taskId: task.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
