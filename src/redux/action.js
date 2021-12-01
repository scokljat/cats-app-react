import axios from "axios";

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get("http://thatcopy.pw/catapi/rest/");
      console.log(response.data);

      dispatch({
        type: "SET_CATS",
        payload: response.data,
      });
    } catch (err) {
      console.log("Err", err);
    }
  };
};

// import { ActionTypes } from "./ActionTypes";
// export const setCats = (cats) => {
//   return {
//     type: "SET_CATS",
//     payload: cats,
//   };
// };
