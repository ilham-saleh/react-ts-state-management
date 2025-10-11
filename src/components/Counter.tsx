import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <h2 className="mb-4">Counter</h2>

      <div className="d-flex align-items-center gap-3">
        <button
          className="btn btn-danger px-4"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>

        <span className="fs-3 fw-bold">{count}</span>

        <button
          className="btn btn-success px-4"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>

      <button className="btn btn-secondary mt-4" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}
