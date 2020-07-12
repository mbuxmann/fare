import React, { useState, useContext } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Subtask from "./Subtask";
import { Context } from "../context/SubtaskContext";
import { Input } from "antd";

const EditableTodoList = ({ subtasks, idOfTodoCard, disabled }) => {
  const { addSubtask } = useContext(Context);
  const [title, setTitle] = useState("");

  const handleOnOutsideClick = () => {
    setTitle("");
  };

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const handleOnKeyPress = (e) => {
    switch (e.key) {
      case "Enter":
        addSubtask(idOfTodoCard, title);
        setTitle("");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <OutsideClickHandler onOutsideClick={() => handleOnOutsideClick()}>
        <Input
          placeholder="Subtask"
          value={title}
          disabled={disabled}
          onChange={(e) => handleOnChange(e)}
          onKeyPress={(e) => handleOnKeyPress(e)}
        />
      </OutsideClickHandler>
      {subtasks.map((subtask) => {
        const { id, title, completed } = subtask;
        return (
          <div key={id}>
            <Subtask
              id={id}
              title={title}
              completed={completed}
              idOfTodoCard={idOfTodoCard}
              disabled={disabled}
            />
          </div>
        );
      })}
    </>
  );
};

export default EditableTodoList;
