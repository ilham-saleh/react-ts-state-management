import { useReducer } from "react";
import counterReducer from "../reducers/counterReducer";

export default function Counter() {
  const [value, dispatch] = useReducer(counterReducer, 0);

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <h2 className="mb-4">Counter</h2>

      <div className="d-flex align-items-center gap-3">
        <button
          className="btn btn-danger px-4"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          -
        </button>

        <span className="fs-3 fw-bold">{value}</span>

        <button
          className="btn btn-success px-4"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          +
        </button>
      </div>

      <button
        className="btn btn-secondary mt-4"
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset
      </button>
    </div>
  );
}
