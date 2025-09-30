import "./NavBar.css";
import {Link} from "react-router-dom";
import {useContext} from 'react';
import {UserContext} from "../store/context";
function NavBar(){
    const {token} = useContext(UserContext);
    return(
        <nav className="NavContainer">
            <ul>

                  <li> <Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                {!token &&<li><Link to="/register">Register</Link></li> }
                {!token && <li><Link to="/login">Login</Link></li> }
                {token &&  <li><Link to="/logout">Logout</Link></li>}
                {token &&  <li><Link to="/profile">Profile</Link></li>}
            </ul>
            
        </nav>
    )
}
export default NavBar;