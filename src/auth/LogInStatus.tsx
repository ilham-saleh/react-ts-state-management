import { useContext } from "react";
import AuthContext from "./authContext";

const LogInStatus = () => {
  const { user, dispatch } = useContext(AuthContext);

  if (user) {
    return (
      <div>
        <p className="text-success">Welcome, {user}!</p>
        <a href="#">
          <button
            className="btn btn-danger"
            onClick={() => dispatch({ type: "LOGOUT" })}
          >
            Log Out
          </button>
        </a>
      </div>
    );
  }

  return (
    <a href="#">
      <button
        onClick={() => dispatch({ type: "LOGIN", username: "Ilham Saleh" })}
      >
        Log In
      </button>
    </a>
  );
};

export default LogInStatus;
