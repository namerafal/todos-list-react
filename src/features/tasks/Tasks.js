import { useDispatch, useSelector } from "react-redux";
import { MainContainer } from "../../GlobalStyle";
import Header from "../../common/Header";
import AppSection from "../../common/section";
import { Button } from "./Buttons/styled";
import { fetchExampleTasks, selectIsLoading } from "./tasksSlice";
import Form from "./Form";
import Buttons from "./Buttons";
import TasksList from "./TasksList";

function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  return (
    <MainContainer>
      <Header title={"Lista zadań"} />
      <AppSection
        title="Dodaj nowe zadanie"
        extraHeaderContent={
          <Button onClick={() => dispatch(fetchExampleTasks())}>
            {isLoading ? "Pobieram zadania" : "Pobierz przykładowe zadania"}
          </Button>
        }

        body={<Form />}
      />
      <AppSection
        title="Lista zadań"
        extraHeaderContent={<Buttons />}
        body={<TasksList />}
      />
    </MainContainer>
  );
}

export default Tasks;