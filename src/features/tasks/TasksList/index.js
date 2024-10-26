import { List, Item, Content, TaskButton } from "./styled";

const TasksList = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map(task => (
      <Item
        key={task.id}
        hidden={task.done && hideDone}
      >
        <TaskButton
          $toggleDone
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✔" : " "}
        </TaskButton>
        <Content $done={task.done}>
          {task.content}
        </Content>
        <TaskButton
          $remove
          onClick={() => removeTask(task.id)}
        >
          🗑
        </TaskButton>
      </Item>
    ))}
  </List>
);


export default TasksList;