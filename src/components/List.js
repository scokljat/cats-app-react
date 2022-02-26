import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchPosts } from "../action/action";

function List() {
  const cat = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  const changePicture = () => {
    dispatch(fetchPosts());
  };
  console.log(cat);

  return (
    <div className="images">
      <div key={cat.cat.id}>
        <img src={cat.cat.url} alt="" />
      </div>
      <button className="btn" onClick={changePicture}>
        Next
      </button>
    </div>
  );
}
export default List;
