import React, { useState, useEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Input, Typography } from "antd";
import styles from "../css/TodoCardDescription.module.css";

const { Text } = Typography;

const { TextArea } = Input;
const EditableTodoCardDescription = ({
  text,
  callback,
  idOfTodoCard,
  disabled,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(text);

  const handleOnOutsideClick = () => {
    setIsEditing(false);
  };

  const handleOnChange = (e) => {
    setNewDescription(e.target.value);
  };

  useEffect(() => {
    if (newDescription !== text && !isEditing) {
      callback(idOfTodoCard, newDescription);
    }
  }, [callback, idOfTodoCard, newDescription, text, isEditing]);

  if (isEditing) {
    return (
      <div className={styles.todoCardDescription}>
        <OutsideClickHandler
          onOutsideClick={() => {
            handleOnOutsideClick();
          }}
        >
          <TextArea
            className={styles.text}
            autoSize={{ minRows: 2 }}
            placeholder="text"
            value={newDescription}
            onChange={(e) => handleOnChange(e)}
          />
        </OutsideClickHandler>
      </div>
    );
  }

  return (
    <div
      className={styles.todoCardDescription}
      onDoubleClick={() => setIsEditing(!disabled)}
    >
      <Text style={{ whiteSpace: "pre-wrap" }} strong>
        {newDescription}
      </Text>
    </div>
  );
};

export default EditableTodoCardDescription;
