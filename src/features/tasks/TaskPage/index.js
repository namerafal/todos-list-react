import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { MainContainer } from "../../../GlobalStyle";
import Header from "../../../common/Header";
import AppSection from "../../../common/Section";
import { getTaskById } from "../tasksSlice";
import { ErrorHeader } from "../../../common/ErrorContent/styled";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));
    return (
        <MainContainer>
            <Header title="Szczegóły zadania" />
            <AppSection
                title={
                    task ?
                        task.content :
                        <ErrorHeader>
                            Nie odnaleziono ID zadania!
                        </ErrorHeader>
                }
                body={
                    task ? (
                        <>
                            <strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}
                        </>
                    ) : (
                        "Spróbuj ponownie z innym zadaniem. 🙂"
                    )
                }
            />
        </MainContainer>
    );
}

export default TaskPage;