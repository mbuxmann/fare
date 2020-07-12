import React, { useState, useEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Input, Typography } from "antd";
import styles from "../css/SubtaskText.module.css";

const { Text } = Typography;

const EditableSubtaskText = ({
  text,
  idOfTodoCard,
  id,
  completed,
  callback,
  disabled,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleOnOutsideClick = () => {
    setIsEditing(false);
  };

  const handleOnChange = (e) => {
    setNewText(e.target.value);
  };

  const handleOnKeyPress = (e) => {
    switch (e.key) {
      case "Enter":
        setIsEditing(false);
        break;
      default:
        setIsEditing(true);
        break;
    }
  };

  useEffect(() => {
    if (newText !== text && !isEditing) {
      callback(idOfTodoCard, id, newText, completed);
    }
  }, [callback, idOfTodoCard, id, newText, text, completed, isEditing]);

  if (isEditing) {
    return (
      <div className={styles.subtaskText}>
        <OutsideClickHandler
          onOutsideClick={() => {
            handleOnOutsideClick();
          }}
        >
          <Input
            placeholder="text"
            value={newText}
            onChange={(e) => handleOnChange(e)}
            onKeyPress={(e) => handleOnKeyPress(e)}
          />
        </OutsideClickHandler>
      </div>
    );
  }
  return (
    <div className={styles.subtaskText}>
      <Text
        strong
        delete={completed}
        onDoubleClick={() => {
          setIsEditing(!disabled);
        }}
      >
        {newText}
      </Text>
    </div>
  );
};

export default EditableSubtaskText;
