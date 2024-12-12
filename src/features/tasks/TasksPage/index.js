import { MainContainer } from "../../../GlobalStyle";
import Header from "../../../common/Header";
import AppSection from "../../../common/Section";
import Form from "./Form";
import Buttons from "./Buttons";
import TasksList from "./TasksList";
import Search from "./Search";
import FetchExampleTasksButton from "./FetchExampleTasksButton";

function TasksPage() {

  return (
    <MainContainer>
      <Header title={"Lista zadań"} />
      <AppSection
        title="Dodaj nowe zadanie"
        extraHeaderContent={<FetchExampleTasksButton />}
        body={<Form />}
      />

      <AppSection
        title="Wyszukaj zadanie"
        body={<Search />}
      />

      <AppSection
        title="Lista zadań"
        extraHeaderContent={<Buttons />}
        body={<TasksList />}
      />
    </MainContainer>
  );
}

export default TasksPage;