import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./action";

function List() {
  const cat = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  const changePicture = () => {
    dispatch(fetchPosts());
  };

  return (
    <div className="images">
      <div key={cat.cat.id}>
        <img src={cat.cat.url} />
      </div>
      <button className="btn" onClick={changePicture}>
        Next
      </button>
    </div>
  );
}
export default List;
