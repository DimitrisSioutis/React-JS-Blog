import React from 'react'
import {Link , useNavigate} from 'react-router-dom'
import axios from 'axios';
import { IconPlus ,IconEdit,IconLogout,IconNews,IconBallFootball ,IconUser } from '@tabler/icons';
import '../styles/AdminBar.css'

const AdminBar = ({setSuccess,user}) => {

    const navigate = useNavigate();

    const handleLogout = (e) => {
    
        axios.delete('http://localhost:8080/api/logout').then((res)=>{
          if(res.data == false){
            setSuccess(false)
            navigate('/')
          }
        })
        e.preventDefault();
    }

  return (        
    <>        
        <div className="admin-bar">
            <div className="admin welcome"><IconUser/><span>Καλώς ήλθες {user}</span></div>
            <div className='admin add'> <IconPlus/><span>Προσθήκη :</span>
                <IconNews className='icon-link'/><Link to={`/articles/new`} className="link" state={{article:{title:'',description:'',markdown:'',image:''}}}>Άρθρου</Link>
                <IconBallFootball className='icon-link' /><Link to={`/players/new`} className="link" state={{player:{firstname:'',lastname:'',birthday:'',number:'',position:'',appearances:'',goals:'',image:'',background:''}}}>Παίχτη</Link>   
            </div>
            <div className='admin edit'> <IconEdit/><span>Επεξεργασία :</span> 
                <IconNews  className='icon-link' /><Link to={`/news`} className="link" >Άρθρου</Link>
                <IconBallFootball className='icon-link' /><Link to={`/team`} className="link" >Παίχτη</Link>
            </div>
            <a className='admin logout' onClick={handleLogout} > <IconLogout/>Αποσύνδεση</a>
        </div>
    </>     
  )
}

export default AdminBar
