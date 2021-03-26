import {
  ADD_STATION,
  FOLLOW_STATION,
  REMOVE_STATION,
  UPDATE_STATION,
} from "./types";

export const addStation = (station) => (dispatch) => {
  return {
    type: ADD_STATION,
    payload: station,
  };
};

export const followStation = (id) => (dispatch) => {
  return {
    type: FOLLOW_STATION,
    payload: id,
  };
};

export const removeStation = (id) => (dispatch) => {
  return {
    type: REMOVE_STATION,
    payload: id,
  };
};
export const updateStation = (data) => (dispatch) => {
  return {
    type: UPDATE_STATION,
    payload: data,
  };
};
