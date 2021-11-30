import { ActionTypes } from "./ActionTypes";
const initialState = {
  cats: [],
};

export const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CATS:
      return { ...state, cats: payload };
    default:
      return state;
  }
};
