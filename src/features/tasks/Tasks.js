import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import AppSection from "../../common/section";
import Header from "../../common/Header";
import { MainContainer } from "../../GlobalStyle";

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