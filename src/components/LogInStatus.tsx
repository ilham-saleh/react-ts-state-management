import { useContext } from "react";
import AuthContext from "../context/authContext";

const LogInStatus = () => {
  const { user, authDispatch } = useContext(AuthContext);

  if (user) {
    return (
      <div>
        <p className="text-success">Welcome, {user}!</p>
        <a href="#">
          <button
            className="btn btn-danger"
            onClick={() => authDispatch({ type: "LOGOUT" })}
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
        onClick={() => authDispatch({ type: "LOGIN", username: "Ilham Saleh" })}
      >
        Log In
      </button>
    </a>
  );
};

export default LogInStatus;
