import "./style.css"

const Tasks = ({ tasks, hideDoneTasks }) => (
	<ul className="tasks">
		{tasks.map(task => (
			<li key={task.id} className={`tasks__item ${hideDoneTasks && task.done
				? "tasks__item--hiden" : ""}`}>
				<button className="tasks__buttons tasks__buttons--toggleDone">
					{task.done ? "✔" : " "}
				</button>
				<span className={`tasks__content${task.done ? " tasks__content--done" : ""}`}>
					{task.content}
				</span>
				<button className="tasks__buttons tasks__buttons--remove">
					🗑
				</button>
			</li>
		))}
	</ul>
);


export default Tasks;