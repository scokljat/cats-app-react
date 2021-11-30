import { ActionTypes } from "./ActionTypes";
export const setCats = (cats) => {
  return {
    type: "SET_CATS",
    payload: cats,
  };
};
