import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { MainContainer } from "../../../GlobalStyle";
import Header from "../../../common/Header";
import AppSection from "../../../common/Section";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));
    return (
        <MainContainer>
            <Header title="Szczegóły zadania" />
            <AppSection
                title={task ? task.content : "Nie odnaleziono ID zadania!"}                
                body={
                    task ? (
                        <>
                            <strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}
                        </>
                    ) : (
                        "Spróbuj ponownie z innym zadaniem."
                    )
                }
            />
        </MainContainer>
    );
}

export default TaskPage;