import AuthProvider from "./components/AuthProvider";
import NavBar from "./components/NavBar";
import TasksProvider from "./components/TasksProvider";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <NavBar />
        <HomePage />
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;
