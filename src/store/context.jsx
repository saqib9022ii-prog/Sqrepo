import {createContext,useState,useEffect} from "react";

export const UserContext = createContext();

export function UserProvider({children}){
    const [token,setToken] = useState(null);
    const [error,setError] = useState("");
    useEffect(()=>{
        try {
            const storedToken = localStorage.getItem("token");
            if(!storedToken){
                return setToken(null);
            }
            setToken(storedToken);
        } catch (err) {
            setError(err.message);
            localStorage.removeItem("token");
        }
    },[])
    return(
        <UserContext.Provider value={{token,setToken,error}}>
            {children}
        </UserContext.Provider>
    )
}
