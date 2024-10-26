import { useState } from "react";
import { useTasks } from "../../useTasks";
import TaskAddingForm from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import AppSection from "../../common/section";
import Header from "../../common/Header";
import { MainContainer } from "../../GlobalStyle";

function Tasks() {
  const [hideDone, setHideDone] = useState(false);
  const {
    tasks,
    addNewTask,
    removeTask,
    toggleTaskDone,
    allTasksDone,
  } = useTasks();

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  return (
    <MainContainer>
      <Header title={"Lista zadań"} />
      <AppSection
        title="Dodaj nowe zadanie"
        body={<TaskAddingForm addNewTask={addNewTask} />}
      />

      <AppSection
        title="Lista zadań"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            allTasksDone={allTasksDone}
          />
        }
        body={
          <TasksList
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
      />
    </MainContainer>
  );
}

export default Tasks;