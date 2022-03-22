import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

import {createUserWithEmailAndPassword} from "firebase/auth";


export function SignUp() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const navigate = useNavigate();

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const register = async () => {
    try {
      const user = await signUp(registerEmail, registerPassword);

      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container-signUp h-screen    bg-cover bg-no-repeat   bg-[url('https://images.unsplash.com/photo-1525352265139-caa4490ea6d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80')]">
      <div className="box-signUp h-full flex justify-center  items-center">
        <div className="window-signUp bg-gray-600 bg-opacity-30 rounded-md h-3/4 w-1/2 border-2 border-white-900 flex flex-col  justify-around  items-center">
          <div className="inputs-signUp flex flex-col  justify-around  items-center h-1/2 w-1/2 ">
            <label>
              <h1 className="text-white">Register</h1>

              <input
                name="email"
                onChange={(event) => {
                  setRegisterEmail(event.target.value);
                }}
                type="email"
                placeholder="Email"
              />
            </label>
            <label>
              <input
                name="password"
                onChange={(event) => {
                  setRegisterPassword(event.target.value);
                }}
                type="password"
                placeholder="password"
              />
            </label>
            <button
              className="registerBtn w-1/4  text-white border-2 border-white-900 rounded-lg"
              onClick={register}
            >
              Sign Up
            </button>
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="loginbackBtn w-1/4  text-white border-2 border-white-900 rounded-lg"
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
