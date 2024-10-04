import { create } from "zustand";



const zustandStore = create<StoreState>((set) => ({
  token: null,
  setToken: (token: string | null) => set({ token }),
  popup: null,
  setPopup: (popup) => set({ popup })
}));

export default zustandStore;
