import { create } from "zustand";

interface CounterState {
  credits: number;
  increment: (creditsUsed: number) => void;
  getCredits: () => number;
  reset: () => void;
}

const useCounterStore = create<CounterState>((set, get) => ({
  credits: 0,
  increment: (creditsUsed: number) =>
    set((state) => ({ credits: state.credits + creditsUsed })),
  getCredits: () => {
    return get().credits;
  },
  reset: () => set({ credits: 0 }),
}));

export default useCounterStore;
