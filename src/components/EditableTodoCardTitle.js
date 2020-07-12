import React, { useState, useEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Input, Typography } from "antd";
import styles from "../css/TodoCardTitle.module.css";

const { Title } = Typography;

const EditableTodoCardTitle = ({
  text,
  size,
  callback,
  idOfTodoCard,
  disabled,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(text);

  const handleOnOutsideClick = () => {
    setIsEditing(false);
  };

  const handleOnChange = (e) => {
    setNewTitle(e.target.value);
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
    if (newTitle !== text && !isEditing) {
      callback(idOfTodoCard, newTitle);
    }
  }, [callback, idOfTodoCard, newTitle, text, isEditing]);

  if (isEditing) {
    return (
      <div className={styles.todoCardTitle}>
        <OutsideClickHandler
          onOutsideClick={() => {
            handleOnOutsideClick();
          }}
        >
          <Input
            placeholder="text"
            value={newTitle}
            onChange={(e) => handleOnChange(e)}
            onKeyPress={(e) => handleOnKeyPress(e)}
          />
        </OutsideClickHandler>
      </div>
    );
  }

  return (
    <div>
      <Title
        style={{ textAlign: "center" }}
        onDoubleClick={() => {
          setIsEditing(!disabled);
        }}
        level={size}
      >
        {newTitle}
      </Title>
    </div>
  );
};

export default EditableTodoCardTitle;
