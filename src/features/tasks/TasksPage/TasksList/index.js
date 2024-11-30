import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, TaskButton } from "./styled";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName";

const TasksList = () => {
  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

  const tasks = useSelector(state => selectTasksByQuery(state, query));
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
            <Link to={`/zadania/${task.id}`}>{task.content}</Link>
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