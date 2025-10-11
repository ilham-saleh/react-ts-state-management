interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface State {
  loading: boolean;
  data: Post[] | null;
  error: string | null;
}

type Action =
  | { type: "LOADING" }
  | { type: "SUCCESS"; payload: Post[] }
  | { type: "ERROR"; payload: string };

export const initialState: State = { loading: false, data: null, error: null };

const postsReducer = (state: State, action: Action): any => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "SUCCESS":
      return { loading: false, data: action.payload, error: null };
    case "ERROR":
      return { loading: false, data: null, error: action.payload };
    default:
      return state;
  }
};

export default postsReducer;
