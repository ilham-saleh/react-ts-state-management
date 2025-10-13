import { useState } from "react";

const LogInStatus = () => {
  const [user, setUser] = useState("");

  if (user) {
    return (
      <div>
        <p className="text-success">Welcome, {user}!</p>
        <a href="#">
          <button className="btn btn-danger" onClick={() => setUser("")}>
            Log Out
          </button>
        </a>
      </div>
    );
  }

  return (
    <a href="#">
      <button onClick={() => setUser("Ilham Saleh")}>Log In</button>
    </a>
  );
};

export default LogInStatus;
