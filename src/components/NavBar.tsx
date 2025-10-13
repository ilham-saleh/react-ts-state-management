import { useContext } from "react";
import TasksContext from "../context/tasksContext";
import LogInStatus from "./LogInStatus";

const NavBar = () => {
//   const { tasks } = useContext(TasksContext);

  return (
    <nav className="navbar d-flex justify-content-between container">
      <span className="badge text-bg-secondary">{tasks.length + " Tasks"}</span>
      <LogInStatus />
    </nav>
  );
};

export default NavBar;
