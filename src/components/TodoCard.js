import React, { useState, useEffect, useContext } from "react";
import styles from "../css/TodoCard.module.css";
import { Skeleton, Card } from "antd";
import { Context } from "../context/TodoCardContext";
import { CheckOutlined, DeleteOutlined } from "@ant-design/icons";
import EditableTodoCardTitle from "./EditableTodoCardTitle";
import EditableTodoCardDescription from "./EditableTodoCardDescription";
import EditableSubtaskList from "./EditableSubtaskList";

const TodoCard = ({
  cardId,
  cardTitle,
  cardDescription,
  cardSubtasks,
  cardCompleted,
}) => {
  const {
    deleteTodoCard,
    toggleTodoCardCompleted,
    changeTodoCardTitle,
    changeTodoCardDescription,
  } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className={cardCompleted ? styles.cardCompleted : styles.card}>
      <Card
        actions={[
          <DeleteOutlined
            key="remove"
            onClick={() => deleteTodoCard(cardId)}
          />,
          <CheckOutlined
            className={cardCompleted ? styles.tickComplete : null}
            key="complete"
            onClick={() => toggleTodoCardCompleted(cardId, !cardCompleted)}
          />,
        ]}
      >
        <Skeleton loading={loading}>
          <div>
            <EditableTodoCardTitle
              text={cardTitle}
              size={1}
              callback={changeTodoCardTitle}
              idOfTodoCard={cardId}
              disabled={cardCompleted}
            />
          </div>
          <EditableTodoCardDescription
            text={cardDescription}
            callback={changeTodoCardDescription}
            idOfTodoCard={cardId}
            disabled={cardCompleted}
          />
          <EditableSubtaskList
            subtasks={cardSubtasks}
            idOfTodoCard={cardId}
            disabled={cardCompleted}
          />
        </Skeleton>
      </Card>
    </div>
  );
};

export default TodoCard;
