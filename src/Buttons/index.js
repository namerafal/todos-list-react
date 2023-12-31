import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, allTasksDone }) => (
  <div className="buttons">
    {tasks.length > 0 && (
      <>
        <button
          onClick={toggleHideDone}
          className="buttons__button"
          disabled={!tasks.some(({ done }) => done)}
        >
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button
          onClick={allTasksDone}
          className="buttons__button"
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </button>
      </>
    )}
  </div>
);

export default Buttons;