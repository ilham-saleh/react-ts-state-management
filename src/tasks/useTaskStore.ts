import { create } from "zustand";
import type { Task } from "./TasksProvider";

// Using Zustand (alternative implementation)
interface TaskStore {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (taskId: number) => void;
}

const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  addTask: (task: Task) => set((state) => ({ tasks: [task, ...state.tasks] })),
  deleteTask: (taskId: number) =>
    set((state) => ({ tasks: state.tasks.filter((t) => t.id !== taskId) })),
}));

export default useTaskStore;
