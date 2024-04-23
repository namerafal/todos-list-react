import { useState, useEffect } from "react";
import TaskAddingForm from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import AppSection from "./Section";
import Header from "./Header";
import Container from "./Container";

const TempStorageTasks = () => {
  return JSON.parse(localStorage.getItem("tasks")) || [];
};

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState(TempStorageTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(task => task.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(task => task.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    }));
  }

  const allTasksDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })));
  }

  const addNewTask = (content) => {
    setTasks(tasks => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,

      }]);
  };

  return (
    <Container>
      <Header title={"Lista zadań"} />
      <AppSection
        header={false}
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