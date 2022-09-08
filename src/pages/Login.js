import axios from "axios"
import { useState } from "react"
import {Navigate} from "react-router-dom"
import '../styles/Login.css'

export default function Login({success,setSuccess,users}){
    
    const url = 'https://api-for-react-project.herokuapp.com/api'
    //const url = 'http://localhost:8080/api'
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");   
    
    const [usernameError, setUsernameError] = useState("0");
    const [passwordError, setPasswordError] = useState("0");
  
    const [borderOpacity, setBorderOpacity] = useState("0");
    const [borderColor, setBorderColor] = useState("0px 0px 3px 2px #EE4B2B");
    
    const onUnameChange = (e) => {
      users.forEach(user =>{
        if (e.target.value === "") {
          setBorderOpacity("0");
          setUsernameError("0");
        } else if (e.target.value === user.username) {
          setBorderOpacity("1");
          setBorderColor("0px 0px 3px 2px #00FF00");
        } else {
          setBorderOpacity("1");
          setBorderColor("0px 0px 3px 2px #EE4B2B");
        }
      })
      setUsername(e.target.value);
    };
  
    const onPwordChange = (e) => {
      setPassword(e.target.value);
      setPasswordError("0");
    };
    
    const handleSubmit = (e)=>{
      
        users.forEach(user => {
            if (user.username !== username) {
                setUsernameError("1");
              } else if (user.username === username && user.password !== password) {
                setPasswordError("1");
                setBorderOpacity("0");
              } else {
                setUsernameError("0");
                axios.post(`${url}/login`,user).then((res) =>{
                    if(res.data){
                        setSuccess(true)
                        setUsername('')
                        setPassword('')
                        
                    }
                })
              }
            })
        e.preventDefault(); 
    }
  

     
    return(
        <>
            {success? (
                <Navigate to="/"/>
            ):(
            <div className="body">
                  <div className="bg-img">
                      <img src="https://i.ibb.co/rwf4qGv/logo.png" alt="" />
                  </div>

                  <div className="login-form-container">
                      <form action="/login" className="login-form" id="login-form" method="POST">

                          <h1>Login</h1>

                          <div className="login-form-fields">

                            <div className="username">
                              <label for="username">Username :</label>
                              <input type="text" id="username" name="username" placeholder="Username" onChange={onUnameChange}/>
                            </div>
                            <div className="uname-border" style={{ opacity: borderOpacity, boxShadow: borderColor }}></div>
                            <span id="user-error" style={{ opacity: usernameError }}> Λάθος username </span>
                            
                            <div className="password">
                              <label for="password">Password :</label>
                              <input type="password" id="password" name="password" placeholder="Password" onChange={onPwordChange}/>
                            </div>
                            <span id="pass-error" style={{ opacity: passwordError }}> Λάθος κωδικός </span>

                            <div className="submit">
                              <input type="button" id="login" value="Είσοδος" onClick={handleSubmit} />
                          </div>

                        </div>
                      </form>
                </div>
            </div>
            )}
        </>
    )
}

