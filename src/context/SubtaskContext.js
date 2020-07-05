import createDataContext from "./createDataContext";

const SubtaskReducer = (state, action) => {
  switch (action.type) {
    case "add_subtask":
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          done: action.payload.done,
        },
      ];
    case "rename_subtask":
      console.log(action);
      return state.map((subtask) => {
        return subtask.id === action.payload.id ? action.payload : subtask;
      });
    case "toggle_subtask":
      return state.map((subtask) => {
        return subtask.id === action.payload.id ? action.payload : subtask;
      });
    case "delete_subtask":
      return state;
    default:
      return state;
  }
};

const addSubtask = (dispatch) => {
  return (id, title, done) => {
    dispatch({ type: "add_subtask", payload: { id, title, done } });
  };
};

const renameSubtask = (dispatch) => {
  return (id, title, done) => {
    dispatch({ type: "rename_subtask", payload: { id, title, done } });
  };
};

const toggleSubtask = (dispatch) => {
  return (id, title, done) => {
    dispatch({ type: "toggle_subtask", payload: { id, title, done: !done } });
  };
};

export const { Context, Provider } = createDataContext(
  SubtaskReducer,
  { addSubtask, renameSubtask, toggleSubtask },
  []
);
