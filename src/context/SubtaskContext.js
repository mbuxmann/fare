import createDataContext from "./createDataContext";
import fareApi from "../api/fareApi";
import { v4 as uuidv4 } from "uuid";

const subtaskReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const getSubtasks = (dispatch) => {
  return async (idOfTodoCard) => {
    const subtasks = await fareApi.get(`/todocards/${idOfTodoCard}/subtasks`);
    dispatch({
      type: "get_subtasks",
      payload: subtasks.data,
    });
  };
};

const addSubtask = (dispatch) => {
  return async (idOfTodoCard, title) => {
    await fareApi.post(`/todocards/${idOfTodoCard}/subtasks`, {
      id: uuidv4(),
      title,
    });
  };
};

const deleteSubtask = (dispatch) => {
  return async (idOfTodoCard, id) => {
    await fareApi.delete(`/todocards/${idOfTodoCard}/subtasks`, {
      data: { id },
    });
  };
};

const editSubtask = (dispatch) => {
  return async (idOfTodoCard, id, title, completed) => {
    await fareApi.patch(`/todocards/${idOfTodoCard}/subtasks`, {
      id,
      title,
      completed,
    });
  };
};

export const { Context, Provider } = createDataContext(
  subtaskReducer,
  { getSubtasks, addSubtask, deleteSubtask, editSubtask },
  []
);
