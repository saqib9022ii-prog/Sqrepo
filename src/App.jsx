import {BrowserRouter,Routes,Route,Link,useNavigate} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/UserProfile";
import Logout from "./pages/Logout";
import {UserProvider} from "./store/context";
import NavBar from "./navbar/NavBar";
import Registered from "./pages/Registered";
function App(){
return(
  <>
  <UserProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/logout" element={<Logout/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/registered" element={<Registered/>}/>
    </Routes>
    </BrowserRouter>
  </UserProvider>
  </>
)
}
export default App;