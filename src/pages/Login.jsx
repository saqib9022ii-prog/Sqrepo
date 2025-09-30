import "./Login.css"
import {useState,useContext} from "react";
import { useNavigate } from "react-router-dom";
import {UserContext} from "../store/context";
function Login(){
    const navigate = useNavigate();
    const {setToken} = useContext(UserContext);
    const [form,setForm] = useState({email:"",password:""});
    const [message,setMessage] = useState("");
    const handleChange= (e) =>{
        setForm({...form,[e.target.name]:e.target.value});
    }
    const handleSubmit = async(e) =>{
        try {
            e.preventDefault();
            const post = await fetch("http://localhost:5000/login",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(form),
            })
            const res =await post.json();
            setMessage(res.message);
            if(res.success && res.token){
                localStorage.setItem("token", res.token);
                localStorage.setItem("user",JSON.stringify( res.user));
                setToken(res.token);
                navigate("/profile");

            }
        } catch (error) {
            setMessage(error.message);
        }
    }
    return(
        <div className="LoginContainer">
        <div className="LoginBox">
            <br></br>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input type="email" name="email" value={form.email} placeholder="Enter Email" onChange={handleChange} required />
                <br></br>
                <input type="password" name="password" value={form.password} placeholder="Enter Password" onChange={handleChange} required />
                <br></br>
                <button type="submit">LogIn</button>
            </form>
            <p>{message}</p>
        </div>
        </div>
    )
}
export default Login;