import React, { useState, useEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Input, Typography } from "antd";

const { Text } = Typography;

const { TextArea } = Input;

const handleOnOutsideClick = (setIsEditing) => {
  setIsEditing(false);
};

const handleOnChange = (e, setNewText) => {
  setNewText(e.target.value);
};

const EditableTextArea = ({ text, callback }) => {
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
          <TextArea
            autoSize={{ minRows: 2 }}
            placeholder="text"
            value={newText}
            onChange={(e) => handleOnChange(e, setNewText)}
          />
        </OutsideClickHandler>
      </>
    );
  }

  return (
    <>
      <Text
        style={{ whiteSpace: "pre-wrap" }}
        onDoubleClick={() => {
          setIsEditing(true);
        }}
      >
        {newText}
      </Text>
    </>
  );
};

export default EditableTextArea;
