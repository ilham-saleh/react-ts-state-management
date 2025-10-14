import { AuthProvider } from "./auth";
import NavBar from "./components/NavBar";
import { TasksProvider } from "./tasks";
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
