import {create, type StateCreator} from 'zustand';

type LogInType = 1 | 0

type StoreType = {
    loggedIn: boolean
    token: string | null
    
    addToken: (token: string) => void;

    setIsLoggedIn: (val:LogInType) => void;
}

const storeModel: StateCreator<StoreType> = (set)=> {
    return {
        loggedIn: Boolean(localStorage.getItem("loggedIn")) || false,
        token: localStorage.getItem("token"),

        addToken(token) {
            set({token})
        },
        setIsLoggedIn(val) {
            if(val === 0){
                localStorage.setItem("loggedIn", "false")
                set({loggedIn: false});
            }
            else if(val === 1){
                localStorage.setItem("loggedIn", "true")
                set({loggedIn: true});
            }
        }
    }
}

const useNote = create(storeModel);
export default useNote;