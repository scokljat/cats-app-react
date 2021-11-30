import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setCats } from "./redux/action";
function List() {
  const cats = useSelector((state) => state);

  const dispatch = useDispatch();
  async function FetchCats() {
    try {
      const response = await axios.get("http://thatcopy.pw/catapi/rest/");
      const list = response.data;
      console.log(list);
      dispatch(setCats(list));
    } catch (err) {
      console.log("Err", err);
    }
  }
  useEffect(() => {
    FetchCats();
  }, []);

  return <div></div>;
}
export default List;
