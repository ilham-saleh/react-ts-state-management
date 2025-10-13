import { useReducer } from "react";
import NavBar from "./components/NavBar";
import TasksContext from "./context/tasksContext";
import HomePage from "./pages/HomePage";
import taskReducer from "./reducers/taskReducer";

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      <NavBar />
      <HomePage />
    </TasksContext.Provider>
  );
}

export default App;
