import createDataContext from "./createDataContext";
import fareApi from "../api/fareApi";

const TodoReducer = (state, action) => {
  switch (action.type) {
    case "get_todoCards":
      return action.payload;
    default:
      return state;
  }
};

const getTodoCards = (dispatch) => {
  return async () => {
    const todoCards = await fareApi.get("/todocards");
    dispatch({
      type: "get_todoCards",
      payload: todoCards.data,
    });
  };
};

const deleteTodoCard = (dispatch) => {
  return async (id) => {
    await fareApi.delete("/todocards", {
      data: { id },
    });
  };
};

const toggleTodoCardCompleted = (dispatch) => {
  return async (id, completed) => {
    await fareApi.patch("/todocards", {
      id,
      completed,
    });
  };
};

const changeTodoCardTitle = (dispatch) => {
  return async (id, title) => {
    await fareApi.patch("/todocards", {
      id,
      title,
    });
  };
};

const changeTodoCardDescription = (dispatch) => {
  return async (id, description) => {
    await fareApi.patch("/todocards", {
      id,
      description,
    });
  };
};

const addTodoCard = (dispatch) => {
  return async (title, description) => {
    await fareApi.post("/todocards", {
      title,
      description,
    });
  };
};

export const { Context, Provider } = createDataContext(
  TodoReducer,
  {
    getTodoCards,
    deleteTodoCard,
    toggleTodoCardCompleted,
    changeTodoCardTitle,
    changeTodoCardDescription,
    addTodoCard,
  },
  []
);
