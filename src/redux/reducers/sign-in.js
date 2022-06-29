import { SIGN_IN } from "../action-types";

export const signInReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SIGN_IN:
      return {
        signin: payload,
      };
    default:
      return state;
  }
};
