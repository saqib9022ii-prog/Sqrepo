import "./Register.css";
import {useState} from "react";
function Register(){
    const [form,setForm] = useState({name:"",email:"",password:""});
    const [message,setMessage] = useState("");
    const handleChange = (e) =>{
        setForm({...form,[e.target.name]:e.target.value});
    }
    const handleSubmit = async(e) =>{
        try {
            e.preventDefault();
        const post = await fetch("http://localhost:5000/register",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(form)
        });
            const data = await post.json();
            if(post.ok)
            {
                setForm({name:"", email:"",password:""});
            }
            setMessage(data.message);
        } catch (error) {
            setMessage(error.message);
        }
        
    }
    return(
        <div className="RegisterContainer">
        <div className="RegisterForm">
            <h1>Registration</h1>
            <form onSubmit={handleSubmit}> 
                <input type="text" name="name" value={form.name} placeholder="Enter your name" onChange={handleChange} required/>
                <br></br>
                <input type="email" name="email" value={form.email} placeholder="Enter your email" onChange={handleChange} required/>
                <br></br>
                <input type="password" name="password"value={form.password} placeholder="Set password" onChange={handleChange} required />
                <br></br>
                <button type="submit">Register</button>
            </form>
            <p style={{color:"red"}}>{message}</p>
            </div>
        </div>
    )
}
export default Register;