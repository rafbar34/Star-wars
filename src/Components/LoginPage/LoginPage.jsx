import React, { useState } from "react";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import {WithRouter,Navigate, useNavigate} from "react-router-dom"
import {auth} from '../../firebase'
import { useUserAuth } from "../../UserAuthContext/UserAuthContext";
export function LoginPage(){
const [registerEmail, setRegisterEmail] = useState("")
const [registerPassword, setRegisterPassword] = useState("")

const [loginEmail, setLoginEmail] = useState("")

const [loginPassword, setloginPassword] = useState("")
const navigate = useNavigate()

const {signUp} = useUserAuth()
const {logIn} = useUserAuth()

// https://www.youtube.com/watch?v=9bXhf_TELP4&ab_channel=PedroTech 23:41 dokonczyc funkcje logowań + stan "userz zalogownay"
// potem protecet routh https://www.youtube.com/watch?v=6kgitEWTxac&ab_channel=DipeshMalvia
// i na koniec recoil z firebase https://www.cinebur.com/blog/e9be906vd3yobpd42uj0g12vpisluq

const register = async () => {
        try{
        const user = await signUp(registerEmail,registerPassword)
       
    navigate("/")
   }catch(error){
    console.log(error.message);
   }
   
    }
   
    const login = async ()=> {
       
        try{
            const user = logIn(loginEmail,loginPassword)
             navigate("/")
           
       }catch(error){
        console.log(error.message);
       }
    }

  
    
    return(
       
             <main className="h-screen    bg-cover bg-no-repeat   bg-[url('https://images.unsplash.com/photo-1525352265139-caa4490ea6d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80')]">
                 
                 <section className="h-full flex justify-center  items-center">
                   
                        <div className="bg-gray-600 bg-opacity-30 rounded-md h-3/4 w-1/2 border-2 border-white-900 flex flex-col  justify-around  items-center">
                            <div className="flex flex-col  justify-around  items-center h-1/2 w-1/2 ">
                           
                       
                           <label>
                            <input className="w-full  rounded-lg" name="email" onChange={(event=>{setLoginEmail(event.target.value)})} type="email" placeholder="Email" />
                          </label>
                          <label>
                            <input className="w-full  rounded-lg " onChange={(event=>{setloginPassword(event.target.value)})} name="password" type="password" placeholder="Password" />
                           </label>
                            <button onClick={login}  onChange={(event=>{setLoginEmail(event.target.value)})}  className="w-1/4  text-white border-2 border-white-900 rounded-lg">Login</button>
                             



                            <div className="flex flex-col  justify-around  items-center h-1/2 w-1/2 ">
                <label>
                    <h1 className="text-white">Register</h1>
                    
                    <input name="email"  onChange={(event=>{setRegisterEmail(event.target.value)})} type="email" placeholder="Email" />
                </label>
                <label>
                    
                    <input name="password"  onChange={(event=>{setRegisterPassword(event.target.value)})} type="password" placeholder="password" />
                </label>
                <button className="text-white border-2 rounded-md" onClick={register}>Sign Up</button>
            </div>


                                 </div>
                                    </div>
                    


                 </section>


             </main>
      
    )
}