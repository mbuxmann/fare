import React, { useState, useEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Input } from "antd";

const handleOnOutsideClick = (setIsEditing) => {
  setIsEditing(false);
};

const handleOnChange = (e, setNewText) => {
  setNewText(e.target.value);
};

const handleOnKeyPress = (e, setIsEditing) => {
  switch (e.key) {
    case "Enter":
      setIsEditing(false);
      break;
    default:
      setIsEditing(true);
      break;
  }
};

const EditableText = ({ text, callback }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  useEffect(() => {
    if (callback) {
      callback(newText);
    }
  }, [callback, newText]);

  if (isEditing) {
    return (
      <>
        <OutsideClickHandler
          onOutsideClick={() => {
            handleOnOutsideClick(setIsEditing);
          }}
        >
          <Input
            placeholder="text"
            value={newText}
            onChange={(e) => handleOnChange(e, setNewText)}
            onKeyPress={(e) => handleOnKeyPress(e, setIsEditing)}
          />
        </OutsideClickHandler>
      </>
    );
  }

  return (
    <>
      <label
        onDoubleClick={() => {
          setIsEditing(true);
        }}
      >
        {newText}
      </label>
    </>
  );
};

export default EditableText;
