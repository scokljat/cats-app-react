import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./redux/action";

function List() {
  const cats = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <div>
      {" "}
      {cats.map((item) => {
        return <img src={item.url} />;
      })}
    </div>
  );
}
export default List;
