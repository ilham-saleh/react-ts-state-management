import React from "react";
import TasksContext from "./tasksContext";
import useTaskStore from "./useTaskStore";

export interface Task {
  id: number;
  title: string;
}

// export type TaskAction =
//   | { type: "ADD"; task: Task }
//   | { type: "DELETE"; taskId: number };

// const taskReducer = (tasks: Task[], action: TaskAction): Task[] => {
//   switch (action.type) {
//     case "ADD":
//       return [action.task, ...tasks];
//     case "DELETE":
//       return tasks.filter((t) => t.id !== action.taskId);
//     default:
//       return tasks;
//   }
// };

interface Props {
  children: React.ReactNode;
}

const TasksProvider = ({ children }: Props) => {
  // const [tasks, dispatch] = useReducer(taskReducer, []);
  const { tasks, addTask, deleteTask } = useTaskStore();

  return (
    <TasksContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
