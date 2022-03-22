import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../../firebase";

export function LoginPage() {
 

  const [loginEmail, setLoginEmail] = useState("");

  const [loginPassword, setloginPassword] = useState("");
  
  const navigate = useNavigate();



  function logInUser(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const login = async () => {
    try {
      const {user} = logInUser(loginEmail, loginPassword);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container-login h-screen    bg-cover bg-no-repeat   bg-[url('https://images.unsplash.com/photo-1525352265139-caa4490ea6d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80')]">
      <div className="box-login h-full flex justify-center  items-center">
        <div className="window-login bg-gray-600 bg-opacity-30 rounded-md h-3/4 w-1/2 border-2 border-white-900 flex flex-col  justify-around  items-center">
          <div className="inputs-login flex flex-col  justify-around  items-center h-1/2 w-1/2 ">
            <label>
              <input
                className="w-full  rounded-lg"
                name="email"
                onChange={(event) => {
                  setLoginEmail(event.target.value);
                }}
                type="email"
                placeholder="Email"
              />
            </label>
            <label>
              <input
                className="w-full  rounded-lg "
                onChange={(event) => {
                  setloginPassword(event.target.value);
                }}
                name="password"
                type="password"
                placeholder="Password"
              />
            </label>
            <button
              onClick={login}
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
              className="loginBtn w-20  text-white border-2 border-white-900 rounded-lg"
            >
              Login
            </button>
            <button
              onClick={() => {
                navigate("/SignUp");
              }}
              className="signUpBtn w-20  text-white border-2 border-white-900 rounded-lg"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
