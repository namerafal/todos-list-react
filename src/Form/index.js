import { useState } from "react";
import { Form, Input, FormButton } from "./styled";

const TaskAddingForm = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const trimmedNewTaskContent = newTaskContent.trim();

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (!trimmedNewTaskContent) {
      return;
    }
    addNewTask(trimmedNewTaskContent);
    setNewTaskContent("");
  };

  return (
    <Form onSubmit={onFormSubmit} >
      <Input
        value={newTaskContent}
        className="form__input"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <FormButton>Dodaj zadanie</FormButton>
    </Form>
  )
};

export default TaskAddingForm;