import React, { useContext, useState } from "react";
import { Checkbox } from "antd";
import { Context } from "../context/SubtaskContext";
import EditableSubtaskText from "./EditableSubtaskText";
import { DeleteOutlined } from "@ant-design/icons";
import styles from "../css/Subtask.module.css";

const Subtask = ({ idOfTodoCard, id, title, completed, disabled }) => {
  const { editSubtask, deleteSubtask } = useContext(Context);
  const [isHovering, setIsHovering] = useState(false);

  const handleOnChange = () => {
    if (!disabled) {
      editSubtask(idOfTodoCard, id, title, !completed);
    }
  };

  return (
    <div
      className={styles.subtaskContainer}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className={styles.subtask}>
        <Checkbox
          className={styles.checkbox}
          checked={completed}
          onChange={() => handleOnChange()}
        />
        <EditableSubtaskText
          text={title}
          idOfTodoCard={idOfTodoCard}
          id={id}
          completed={completed}
          callback={editSubtask}
          disabled={disabled}
        />
      </div>
      {isHovering && !disabled ? (
        <div className={styles.deleteIcon}>
          <DeleteOutlined onClick={() => deleteSubtask(idOfTodoCard, id)} />
        </div>
      ) : null}
    </div>
  );
};

export default Subtask;
