import { useSelector, useDispatch } from "react-redux";
import { Wrapper, Button } from "./styled";
import { selectTasks, toggleHideDone, allTasksDone } from "../tasksSlice";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      {tasks.length > 0 && (
        <>
          <Button
            onClick={() => dispatch(toggleHideDone())}
            disabled={!tasks.some(({ done }) => done)}
          >
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            onClick={() => dispatch(allTasksDone())}
            disabled={tasks.every(({ done }) => done)}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </Wrapper>
  )
};

export default Buttons;