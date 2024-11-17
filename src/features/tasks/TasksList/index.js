import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, TaskButton } from "./styled";
import { toggleTaskDone, removeTask, selectTasks, selectHideDone } from "../tasksSlice";

const TasksList = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);

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