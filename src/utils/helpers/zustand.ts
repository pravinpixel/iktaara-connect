import { create } from "zustand";



const zustandStore = create<UserStoreType>()((set) => ({
  token: null,
  setToken: (newToken) => set({ token: newToken  }),
 
}))



export default zustandStore;
