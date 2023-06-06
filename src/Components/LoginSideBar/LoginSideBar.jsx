import React from "react";
import "./login-sidebar.css"
import loginPageLogo from "../../resources/images/logo-new-copy.png"

function LoginSideBar() {
  return (
    <div>
      
      <div class="wrapper">
       
        <nav id="sidebar-login">
            <div class="sidebar-login-header">
                <img className="sidebar-login-logo" src={loginPageLogo} alt=""/>
            </div>

            <div>
                <ul class="list-unstyled components">
                    <li>
                        <span className="p-center" >Controller Portal</span>
                    </li>                    
                </ul>
            </div>
        </nav>

       
        <div>

        </div>
    </div>

    </div>
  );
}
export default LoginSideBar