import React from "react";
import { auth, provider } from "./../configs/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./styles/login.css";

function Login({ setIsAuth }) {
  let navigate = useNavigate();

  const signinWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", "true");
      setIsAuth(true);
      navigate("/blog");
    });
  };

  return (
    <div className="loginPage">
      <p>Sign in</p>
      <button className="login-with-google-btn" onClick={signinWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;
