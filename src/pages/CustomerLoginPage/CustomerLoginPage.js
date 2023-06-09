import React, { useState } from "react";
import "./CustomerLoginPage.css";
import loginPageLogo from "../../resources/images/login-page-logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CustomerLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit() {
    if (username === "admin" && password === "admin") {
      notifySuccess();
    } else {
      notifyFail();
    }
  }

  function notifySuccess() {
    toast.success("Login Success!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    window.location.href = "/generate-email"
  }

  function notifyFail() {
    toast.error("Login Failed!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return (
    <div className="login-page">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    
    <div style={{ display: 'flex', width: '100%', height: '100vh', flexDirection:'column', alignItems: 'center', justifyContent: 'center', gap: '50px' }}>
        <img src={loginPageLogo} alt="Logo" />
    
        <div style={{ boxShadow: '0px 4px 14px 10px rgba(0, 0, 0, 0.25)', gap: '15px', display: 'flex', flexDirection:'column', alignItems: 'center', width: '500px', borderRadius: '10px', padding: '25px 30px'  }}>
            <div>
                <h1 style={{ fontWeight: '600', fontSize: '28px' }}>Log in to OmniGen AI</h1>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', width: '100%'  }}>
                <label for="username">Username</label>
                <input 
                    style={{ padding: '8px', borderRadius: '5px' }}
                    name="username" 
                    id="username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                >
                </input>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', width: '100%'  }}>
            <label for="pass">Password</label>
                <input 
                    style={{ padding: '8px', borderRadius: '5px' }}
                    name="pass" 
                    id="pass" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                >
                </input>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%'  }}>
                <input  onClick={() => onSubmit()} style={{ margin: '10px 0 5px 0', backgroundColor: '#0066CC', width: '100%', outline: 'none', border: 'none', padding: '8px', borderRadius: '5px', color: '#fff', fontWeight: '600' }} type="submit" value={"Submit"}/>
                <a href="#">Forgot password?</a>
            </div>
        </div>
    </div>

     
     
    </div>
  );
}

export default CustomerLoginPage;
