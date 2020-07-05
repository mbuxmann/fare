import React, { useState, useContext } from "react";
import { Context } from "../context/SubtaskContext";
import { Checkbox, Input } from "antd";
import EditableText from "./EditableText";
import { v4 as uuidv4 } from "uuid";

const handleOnKeyPress = (key, addSubtask, title, setTitle) => {
  if (key === "Enter") {
    addSubtask(title, title, false);
    setTitle("");
  }
};

const renderSubtasks = (state, renameSubtask, toggleSubtask) => {
  let subtasks = state.map((subtask) => {
    const { id, title, done } = subtask;
    return (
      <>
        <Checkbox
          checked={done}
          onClick={() => toggleSubtask(id, title, done)}
          key={uuidv4()}
        >
          <EditableText text={title} callback={} />
        </Checkbox>
        <br />
      </>
    );
  });

  return subtasks;
};

const EditableTodoList = () => {
  const [title, setTitle] = useState("");
  const { state, addSubtask, renameSubtask, toggleSubtask } = useContext(
    Context
  );

  return (
    <>
      <Input
        placeholder="Subtask"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyPress={(e) => handleOnKeyPress(e.key, addSubtask, title, setTitle)}
      />
      {renderSubtasks(state, renameSubtask, toggleSubtask)}
    </>
  );
};

export default EditableTodoList;
