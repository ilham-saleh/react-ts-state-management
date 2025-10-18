// import { useContext } from "react";
// import AuthContext from "./authContext";

import useAuthStore from "./authStore";

const LogInStatus = () => {
  // const { user, dispatch } = useContext(AuthContext);
  const { user, login, logout } = useAuthStore();

  if (user) {
    return (
      <div>
        <p className="text-success">Welcome, {user}!</p>
        <a href="#">
          <button
            className="btn btn-danger"
            // onClick={() => dispatch({ type: "LOGOUT" })}
            onClick={() => logout()}
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
        // onClick={() => dispatch({ type: "LOGIN", username: "Ilham Saleh" })}
        onClick={() => login("Ilham Saleh")}
        className="btn btn-primary"
      >
        Log In
      </button>
    </a>
  );
};

export default LogInStatus;
