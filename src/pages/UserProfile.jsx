import "./UserProfile.css";
import {useState,useEffect,useContext} from "react";
import {UserContext} from "../store/context";
function Profile() {

     const [user,setUser] = useState(null);
     const [error,setError] = useState("");
     const {token} = useContext(UserContext);
        useEffect(()=>{
            const getUser = async() =>{
                try {
                if(!token){
                    return setError("Token not found!");
                }
                const get = await fetch("http://localhost:5000/userProfile",{
                    method:"GET",
                    headers:{
                        "Content-Type":"application/json",
                        Authorization: `Bearer ${token}`,
                    }
               }
            )
                 const data = await get.json();
                if(!get.ok){
                return setError("failed to fetch");
            }
            else{
                return setUser(data);
            }
                } catch (err) {
                    setError("Something went wrong" + err.message)
                }
               
            }
            getUser();
        },[token]);
        if(error) return <p className="error"> {error}</p>
        if(!user) return <p className="loading">Loading</p>
        return(
            <div className="profile-page">
                <div className="profile-card">
                <h2>User profile</h2>
                <p>User {user.name}</p>
                <br></br>
                <p>Email {user.email}</p>
                </div>
            </div>
        )

}
    export default Profile;