import { create } from "zustand";

interface tokenStatae  {
token:string | null,
tokenChange : (newToken : string) => void
}


const zustandStore = create<tokenStatae>()((set) => ({
  token: null,
  tokenChange: (newToken) => set({ token: newToken  }),
}))



export default zustandStore;
