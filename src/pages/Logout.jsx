import {useNavigate} from "react-router-dom";
import {useContext,useEffect} from "react";
import {UserContext} from "../store/context";
function Logout()
    {
        const navigate = useNavigate();
        const {setToken} = useContext(UserContext);
        useEffect(()=>{
            localStorage.removeItem("token");
            setToken(null);
            navigate("/login");
        },[setToken,navigate]);
        return <p>Logging out...</p>
}
export default Logout;