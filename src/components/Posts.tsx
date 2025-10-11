import { useEffect, useReducer } from "react";
import postsReducer, {
  initialState,
} from "../reducers/postsReducer";
import axios from "axios";

function Posts() {
  const [state, dispatch] = useReducer(postsReducer, initialState);

  useEffect(() => {
    const fetchPosts = async () => {
      dispatch({ type: "LOADING" });

      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        dispatch({ type: "SUCCESS", payload: res.data });
      } catch (err) {
        dispatch({ type: "ERROR", payload: "Something went wrong!" });
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Posts</h2>

      {state.loading && <p className="text-primary">Loading...</p>}
      {state.error && <p className="text-danger">{state.error}</p>}

      <ul className="list-group">
        {state.data?.map((post) => (
          <li key={post.id} className="list-group-item">
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
