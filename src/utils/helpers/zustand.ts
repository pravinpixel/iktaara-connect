import { create } from "zustand";

type StoreState = {
  token: string | null;
  setToken: (token: string | null) => void;
 
};

const zustandStore = create<StoreState>((set) => ({
  token: null,
  setToken: (token: string | null) => set({ token }),  
  
}));

export default zustandStore;
