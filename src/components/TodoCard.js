import React, { useState, useEffect } from "react";
import { Skeleton, Card, Typography } from "antd";
import { CheckOutlined, PlusOutlined } from "@ant-design/icons";
import EditableText from "./EditableText";
import EditableTextArea from "./EditableTextArea";
import EditableTodoList from "./EditableTodoList";
import styles from "../css/TodoCard.module.css";
import { Provider as SubtaskProvider } from "../context/SubtaskContext";
const { Title } = Typography;

const TodoCard = ({ cardTitle, project, cardDescription }) => {
  const [loading, setLoading] = useState(true);
  const [hovering, setHovering] = useState(false);
  const [title, setTitle] = useState(cardTitle);
  const [description, setDescription] = useState(cardDescription);
  const [done, setDone] = useState(false);

  // subtask = [ { subtask: "eat", done: False }, { subtask: "chill", done: true}]
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Card
      className={done ? styles.done : styles.card}
      hoverable={true}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      actions={
        hovering
          ? [
              <PlusOutlined
                key="Add"
                onClick={() => {
                  console.log("add");
                }}
              />,
              <CheckOutlined key="Check" onClick={() => setDone(!done)} />,
            ]
          : null
      }
    >
      <Skeleton loading={loading} avatar active>
        <Title level={2}>
          <EditableText text={title} callback={setTitle} />
        </Title>

        <EditableTextArea
          style={styles.description}
          text={description}
          callback={setDescription}
        />

        <SubtaskProvider>
          <EditableTodoList />
        </SubtaskProvider>
      </Skeleton>
    </Card>
  );
};

export default TodoCard;
