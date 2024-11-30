import { Wrapper, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  allTasksDone,
  selectHideDone,
  toggleHideDone,
  selectNotEmptyTask,
  selectIsSomeTaskDone,
  selectIsEveryTaskDone,
} from "../../tasksSlice";

const Buttons = () => {

  const hideDone = useSelector(selectHideDone);
  const taskNotEmpty = useSelector(selectNotEmptyTask);
  const isSomeTaskDone = useSelector(selectIsSomeTaskDone);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);

  const dispatch = useDispatch();
  return (
    <Wrapper>     
      {taskNotEmpty && (
        <>
          <Button
            onClick={() => dispatch(toggleHideDone())}
            disabled={!isSomeTaskDone}
          >
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            onClick={() => dispatch(allTasksDone())}
            disabled={isEveryTaskDone}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </Wrapper>
  )
};

export default Buttons;