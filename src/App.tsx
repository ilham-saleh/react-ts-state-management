import { useReducer } from "react";
import NavBar from "./components/NavBar";
import TasksContext from "./context/tasksContext";
import HomePage from "./pages/HomePage";
import taskReducer from "./reducers/taskReducer";
import authReducer from "./reducers/authReducer";
import AuthContext from "./context/authContext";

function App() {
  const [tasks, taskDispatch] = useReducer(taskReducer, []);
  const [user, authDispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ user, authDispatch }}>
      <TasksContext.Provider value={{ tasks, taskDispatch }}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
