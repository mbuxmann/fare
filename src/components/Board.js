import React, { useEffect, useContext } from "react";
import TodoCard from "./TodoCard";
import AddTodoCard from "./AddTodoCard";
import { Col, Row } from "antd";
import { Context } from "../context/TodoCardContext";
import styles from "../css/Board.module.css";

const renderTodoCards = (state) => {
  let TodoCards = state.map((Card) => {
    const { _id, title, description, completed, subtasks } = Card;
    return (
      <Col key={_id} span={6}>
        <TodoCard
          cardId={_id}
          cardTitle={title}
          cardDescription={description}
          cardSubtasks={subtasks}
          cardCompleted={completed}
        />
      </Col>
    );
  });

  return TodoCards;
};

const Board = () => {
  const { state, getTodoCards } = useContext(Context);

  useEffect(() => {
    getTodoCards();
  }, [getTodoCards]);

  return (
    <div className={styles.board}>
      <Row gutter={[24, 24]}>
        <Col key="addTodoCard" span={6}>
          <AddTodoCard />
        </Col>
        {renderTodoCards(state)}
      </Row>
    </div>
  );
};

export default Board;
