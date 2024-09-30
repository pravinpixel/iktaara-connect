import { create } from "zustand";



const zustandStore = create<StoreState>((set) => ({
  token: null,
  setToken: (token: string | null) => set({ token }),
  popup: {
    type: undefined,
    option: false,
  },
  setPopup: (popup) => set({ popup })
}));

export default zustandStore;
