import { create, type StateCreator } from "zustand";

type LogInType = 1 | 0;

type StoreType = {
  loggedIn: boolean | null;
  token: string | null;
  path: string,
  sideBarOpen: boolean,

  addToken: (token: string) => void;
  setPath: (pathName: string) => void;
  setSideBarOpen: (status: boolean) => void;
  setIsLoggedIn: (val: LogInType) => void;
};

const storeModel: StateCreator<StoreType> = (set) => {
  return {
    loggedIn: Boolean(localStorage.getItem("loggedIn")) || false,
    token: localStorage.getItem("token"),
    path: "",
    sideBarOpen: false,

    addToken(token: string) {
      if (token === "") {
        set({ token: null });
        localStorage.removeItem("token");
      } else {
        localStorage.setItem("token", token);
        set({ token:token });
      }
    },
    setPath(pathName) {
      set({path: pathName})
    },
    setSideBarOpen(status: boolean){
      set({sideBarOpen: status})
    },
    setIsLoggedIn(val) {
      if (val === 1) {
        localStorage.setItem("loggedIn", "true");
        set({loggedIn: true})
      } else {
        localStorage.removeItem("loggedIn");
        set({loggedIn: false})
      }
    },
  };
};

const useNote = create(storeModel);
export default useNote;
