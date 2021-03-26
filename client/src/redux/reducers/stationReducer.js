import {
  ADD_STATION,
  FOLLOW_STATION,
  REMOVE_STATION,
  UPDATE_STATION,
} from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.typ) {
    case ADD_STATION:
      return {};
    case REMOVE_STATION:
      return {};
    case UPDATE_STATION:
      return {};
    case FOLLOW_STATION:
      return {};

    default:
      return state;
  }
}
