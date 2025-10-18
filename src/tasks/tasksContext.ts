import React from "react";
import type { Task } from "./TasksProvider";

// interface TasksContextType {
//   tasks: Task[];
//   dispatch: React.Dispatch<TaskAction>;
// }

// interface for Zustand implementation
interface TasksContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (taskId: number) => void;
}

const TasksContext = React.createContext<TasksContextType>(
  {} as TasksContextType
);

export default TasksContext;
