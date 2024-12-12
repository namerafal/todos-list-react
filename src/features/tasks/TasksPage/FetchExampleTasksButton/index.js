import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectIsLoading } from "../../tasksSlice";
import { Button } from "../Buttons/styled";

// eslint-disable-next-line
export default () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);


    return (
        <Button
            onClick={() => dispatch(fetchExampleTasks())}
            disabled={isLoading}
        >
            {isLoading ? "Pobieram zadania" : "Pobierz przykładowe zadania"}

        </Button>
    );
};