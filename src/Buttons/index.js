import { Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, allTasksDone }) => (
  <div>
    {tasks.length > 0 && (
      <>
        <Button
          onClick={toggleHideDone}
          disabled={!tasks.some(({ done }) => done)}
        >
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </Button>
        <Button
          onClick={allTasksDone}
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </Button>
      </>
    )}
  </div>
);

export default Buttons;