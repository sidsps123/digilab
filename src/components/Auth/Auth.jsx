import Icon from "../../images/Subtract.svg";
import { useState} from "react";
import "./Auth.css";
import Sider from "../Sider/Sider";
function Auth(){
    return(
        <div id="che">
        <div id="main">
           <div id="sub1">
              <img src={Icon} alt="" />
           </div>
           <div id="sub2">
               <div id="sub21">
                  <div id="sub211">Enter  the verification <br />code to continue</div>
                  <div id="sub212">We sent to <a href="./">hellouser@heads.design</a>. If you <br /> don’t see it, check your spam.</div>
               </div>
                <div id="sub22">
                    <div><input type="text" id="otp" value="1" /></div>
                    <div><input type="text" id="otp" value="2"/></div>
                    <div><input type="text" id="otp" value="3"/></div>
                    <div><input type="text" id="otp" value="4"/></div>
                    <div><input type="text" id="otp" value="5"/></div>
                    <div><input type="text" id="otp" value="6"/></div>
                </div>
                <div id="sub23">
                    <div><a href="./">Back</a></div>
                    <div><a href="./success">Resend 00:10</a></div>
                </div>
            </div>
           <div id="sub3">
            Not Member?<a href="./">Create Account</a>
           </div>
        </div>
        <div><Sider /></div>
        </div>
    )
}
export default Auth;