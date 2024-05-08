import { useState } from "react";
import { useTasks } from "./useTasks";
import TaskAddingForm from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import AppSection from "./Section";
import Header from "./Header";
import Container from "./Container";

function App() {
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
    <Container>
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
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
      />
    </Container>
  );
}

export default App;