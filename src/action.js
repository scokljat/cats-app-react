import axios from "axios";

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get("http://thatcopy.pw/catapi/rest/");

      dispatch({
        type: "SET_CATS",
        payload: response.data,
      });
    } catch (err) {
      console.log("Err", err);
    }
  };
};
