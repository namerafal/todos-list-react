import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { StyledForm, Input, FormButton } from "./styled";
import { addTask } from "../tasksSlice";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedNewTaskContent = newTaskContent.trim();
    if (!trimmedNewTaskContent) {
      return;
    }
    dispatch(addTask({
      content: trimmedNewTaskContent,
      done: false,
      id: nanoid(),
    }))

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

export default Form;