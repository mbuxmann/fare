import React, { useState, useEffect, useContext } from "react";
import { Skeleton, Card, Input, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Context } from "../context/TodoCardContext";
import styles from "../css/AddTodoCard.module.css";

const { Title } = Typography;
const { TextArea } = Input;

const AddTodoCard = () => {
  const { addTodoCard } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleOnClick = () => {
    addTodoCard(title, description);
    setTitle("");
    setDescription("");
  };

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  return (
    <div className={styles.addTodoCard}>
      <Card
        actions={[<PlusOutlined key="add" onClick={() => handleOnClick()} />]}
      >
        <Skeleton loading={loading}>
          <Title style={{ textAlign: "center" }} level={2}>
            Add Todo Card
          </Title>
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextArea
            style={{ marginTop: 10 }}
            placeholder="Description and notes"
            autoSize={{ minRows: 3 }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Skeleton>
      </Card>
    </div>
  );
};

export default AddTodoCard;
