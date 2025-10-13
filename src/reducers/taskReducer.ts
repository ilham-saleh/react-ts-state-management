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

export default taskReducer;
