import { GET_TASKS, ADD_TASK, UPDATE_TASK,DELETE_TASK } from "./TasksTypes";

const initialState = {
  tasks: []
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
      case DELETE_TASK:
      return {
        ...state,
        notes: state.tasks.filter((item, index) => item.id !== action.payload)
      };
    case UPDATE_TASK:
      const updatedTasks = state.tasks.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, ...action.payload };
        }
        return item;
      });
      return {
        ...state,
        tasks: updatedTasks
      };
    default:
      return state;
  }
};