import React, { useReducer } from "react";
import TasksContext from "./tasksContext";
import taskReducer from "./tasksReducer";

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
