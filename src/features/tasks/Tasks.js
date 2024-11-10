// import { useSelector } from "react-redux";
// import { useTasks } from "../../useTasks";
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import AppSection from "../../common/section";
import Header from "../../common/Header";
import { MainContainer } from "../../GlobalStyle";
// import { selectTasks } from "./tasksSlice";

function Tasks() {
  // const { tasks } = useSelector(selectTasks);

  // const {
  //   //tasks,
  //   addNewTask,
  //   // removeTask,
  //   // toggleTaskDone,
  //   allTasksDone,
  // } = useTasks();

  return (
    <MainContainer>
      <Header title={"Lista zadań"} />
      <AppSection
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <AppSection
        title="Lista zadań"
        extraHeaderContent={
          <Buttons
            // allTasksDone={allTasksDone}
          />
        }
        body={
          <TasksList
            // removeTask={removeTask}
            // toggleTaskDone={toggleTaskDone}
          />
        }
      />
    </MainContainer>
  );
}

export default Tasks;