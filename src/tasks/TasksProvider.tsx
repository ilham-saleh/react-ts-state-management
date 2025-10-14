import React, { useReducer } from "react";
import TasksContext from "./tasksContext";

export interface Task {
  id: number;
  title: string;
}

export type TaskAction =
  | { type: "ADD"; task: Task }
  | { type: "DELETE"; taskId: number };

const taskReducer = (tasks: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD":
      return [action.task, ...tasks];
    case "DELETE":
      return tasks.filter((t) => t.id !== action.taskId);
    default:
      return tasks;
  }
};

interface Props {
  children: React.ReactNode;
}

const TasksProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
