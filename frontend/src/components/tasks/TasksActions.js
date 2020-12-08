import axios from "axios";
import { toastOnError } from "../../utils/Utils";
import { GET_TASKS, ADD_TASK, DELETE_TASK, UPDATE_TASK } from "./TasksTypes";

export const getTasks= () => dispatch => {
  axios
    .get("/api/v1/tasks/")
    .then(response => {
      dispatch({
        type: GET_TASKS,
        payload: response.data
      });
    })
    .catch(error => {
      toastOnError(error);
    });
};

export const addTask = task => dispatch => {
  axios
    .post("/api/v1/tasks/", task)
    .then(response => {
      dispatch({
        type: ADD_TASK,
        payload: response.data
      });
    })
    .catch(error => {
      toastOnError(error);
    });
};

export const deleteTask = id => dispatch => {
  axios
    .delete(`/api/v1/tasks/${id}/`)
    .then(response => {
      dispatch({
        type: DELETE_TASK,
        payload: id
      });
    })
    .catch(error => {
      toastOnError(error);
    });
};

export const updateTask = (id, task) => dispatch => {
  axios
    .patch(`/api/v1/tasks/${id}/`, task)
    .then(response => {
      dispatch({
        type: UPDATE_TASK,
        payload: response.data
      });
    })
    .catch(error => {
      toastOnError(error);
    });
};