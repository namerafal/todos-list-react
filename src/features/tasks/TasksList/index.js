import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask } from "../tasksSlice";
import { List, Item, Content, TaskButton } from "./styled";

const TasksList = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    <List>
      {tasks.map(task => (
        <Item
          key={task.id}
          hidden={task.done && hideDone}
        >
          <TaskButton
            $toggleDone
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? "✔" : " "}
          </TaskButton>
          <Content $done={task.done}>
            {task.content}
          </Content>
          <TaskButton
            $remove
            onClick={() => dispatch(removeTask(task.id))}
          >
            🗑
          </TaskButton>
        </Item>
      ))}
    </List>
  )
};


export default TasksList;