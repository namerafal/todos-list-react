import { MainContainer } from "../../GlobalStyle";
import Header from "../../common/Header";
import AppSection from "../../common/section";
import Form from "./Form";
import Buttons from "./Buttons";
import TasksList from "./TasksList";

function Tasks() {
  return (
    <MainContainer>
      <Header title={"Lista zadań"} />
      <AppSection
        title="Dodaj nowe zadanie"
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