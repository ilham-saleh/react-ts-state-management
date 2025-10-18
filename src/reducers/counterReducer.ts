// interface Action {
//   type: "INCREMENT" | "DECREMENT" | "RESET";
// }

// const counterReducer = (state: number, action: Action): number => {
//   if (action.type === "INCREMENT") return state + 1;
//   if (action.type === "DECREMENT") return state - 1;
//   if (action.type === "RESET") return 0;
//   return state;
// };

// export default counterReducer;

// Using Zustand
import { create } from "zustand";

interface CounterStore {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

export default useCounterStore;
