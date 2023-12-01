import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [content, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    
    if (content !== "") {
      addNewTask(content.trim());
      setNewTaskContent("");
    }
  };

  return (
    <form className="form" onSubmit={onFormSubmit} >
      <input
        value={content}
        className="form__input"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  )
};

export default Form;