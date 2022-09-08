import axios from "axios"
import { useState } from "react"
import {Navigate} from "react-router-dom"
import '../styles/Login.css'

export default function Login({success,setSuccess}){

    const [username,setUsername]= useState()
    const [password,setPassword]= useState()
    const user = {username:username,password:password}

    const handleSubmit = (e)=>{
            axios.post('http://localhost:8080/api/login',user).then((res) =>{
                if(res.data){
                    setSuccess(true)
                    setUsername('')
                    setPassword('')
                }
            })
        e.preventDefault(); 
    }

    return(
        <>
            {success? (
                
                <Navigate to="/"/>
            ):(
                <>
                    <div className="page-title">Είσοδος</div>
                    <div className="login-wrapper">
                        <form className="login-form"  action="/login"  method="POST" onSubmit={handleSubmit}>
                            
                            <div className="fields">
                                <div className="username">
                                    <label htmlFor="username">Username :</label>
                                    <input 
                                        type="text" 
                                        id="username"  
                                        placeholder="Username" 
                                        onChange={ (e)=>{setUsername(e.target.value)}}>
                                    </input>
                                </div>
                                <div className="password">
                                    <label htmlFor="password">Password :</label>
                                    <input type="password" id="password"  placeholder="Password" onChange={ (e)=>{setPassword(e.target.value)}} ></input>
                                </div>
                                <div className="submit">
                                    <button type="submit" id="login"  value="Log In">Είσοδος</button>
                                </div>   
                            </div>
                        </form>
                    </div>
                </>
            )}
        </>
    )
}

