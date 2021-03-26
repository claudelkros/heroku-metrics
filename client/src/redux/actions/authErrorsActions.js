import { GET_ERRORS, CLEAR_ERRORS } from "./types";

// Returning errors

export const returnErrors = (message, status, id = null) => {
  return {
    type: GET_ERRORS,
    payload: { message, status, id },
  };
};

// Clearing Errors

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
