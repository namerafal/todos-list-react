import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <ul className="tasks">
    {tasks.map(task => (
      <li key={task.id} className={`tasks__item ${hideDone && task.done
        ? "tasks__item--hiden" : ""}`}>
        <button
          className="tasks__buttons tasks__buttons--toggleDone"
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✔" : " "}
        </button>
        <span className={`tasks__content${task.done ? " tasks__content--done" : ""}`}>
          {task.content}
        </span>
        <button
          className="tasks__buttons tasks__buttons--remove"
          onClick={() => removeTask(task.id)}
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
);


export default Tasks;