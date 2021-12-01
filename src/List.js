import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./redux/action";

function List() {
  const cat = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <img src={cat.cat.url} height="300px" />
    </div>
  );
}
export default List;
