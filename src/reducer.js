import { ActionTypes } from "./ActionTypes";
const initialState = {
  cat: {},
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CATS:
      return { ...state, cat: payload };
    default:
      return state;
  }
};
