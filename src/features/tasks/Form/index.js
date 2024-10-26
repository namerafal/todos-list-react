import { useState, useRef } from "react";
import { StyledForm, Input, FormButton } from "./styled";

const TaskAddingForm = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const trimmedNewTaskContent = newTaskContent.trim();
  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (!trimmedNewTaskContent) {
      return;
    }
    addNewTask(trimmedNewTaskContent);
    setNewTaskContent("");
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <StyledForm onSubmit={onFormSubmit} >
      <Input
        name="contentInput"
        value={newTaskContent}
        ref={inputRef}
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <FormButton onClick={focusInput}>Dodaj zadanie</FormButton>
    </StyledForm>
  )
};

export default TaskAddingForm;