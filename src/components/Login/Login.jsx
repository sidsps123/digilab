import Icon from "../../images/Subtract.svg";
import Hide from "../../images/hide.png";
import View from "../../images/view.png";
import { useState} from "react";
import Sider from "../Sider/Sider";
import {Navigate} from "react-router-dom";
import "./Login.css";
function Login(){
const[type,setType]=useState("password");
const[Eye,setEye]=useState(View);
const[user,setUser]=useState(false);
function open(){
 setUser(true);   
}
const[passwordInput,setPasswordInput]=useState("");
const eye = document.querySelector("#eye");
const handlePasswordChange =(evnt)=>{
    setPasswordInput(evnt.target.value);
}
eye?.addEventListener("click",()=>{
    if(type==="password")
    {
        setType("text");
        setEye(Hide);
        return;
    }
    setEye(View);
    setType("password");
})
    return(
        <div id="checkk">        
        <div id="main">
           <div id="pub1">
              <img src={Icon} alt="" />
           </div>
           <div id="pub2">
              <div id="pub21">
                <div><b>Welcome to</b></div>
                <div><b>Systempackage</b></div>
              </div>   
              <form onSubmit={open}>
            <div id="pub22">
                <input type="text" name="username" id="username" placeholder="Username"/>
            </div>
            <div class="password-container" id="pub23">
               <input type={type} onChange={handlePasswordChange} value={passwordInput} placeholder="Password..." id="password" />
               <div><img src={Eye} id="eye" alt=""/></div>
            </div>
            <button type="submit" id="submit" class="submit">Next</button>
            <br />
            <a id="forgot" href="./">Forgot Your Password?</a>
           </form>
           </div>
           <div id="pub3">
            Not Member?<a href="./">Create Account</a>
           </div>
        </div>
        <div><Sider /></div>
        {user && (
          <Navigate to="/auth" />
        )}
    </div>
    )
}
export default Login;