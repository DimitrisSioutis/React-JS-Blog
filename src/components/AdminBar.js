import React ,{useState}from 'react'
import {Link } from 'react-router-dom'
import axios from 'axios';
import { IconPlus ,IconEdit,IconLogout,IconNews,IconBallFootball ,IconUser } from '@tabler/icons';
import '../styles/AdminBar.css'
import NewArticle from './NewArticle';
import NewPlayer from './NewPlayer';

const AdminBar = ({setSuccess,setMainOpacity}) => {
  //const url = 'https://api-for-react-project.herokuapp.com/api'
  const url = 'http://localhost:8080/api'
  const [displayNewArticle,setDisplayNewArticle] = useState('0');
  const [displayNewPlayer,setDisplayNewPlayer] = useState('0');

    const showArticleFields = (e) =>{
      setDisplayNewArticle('1')
      setMainOpacity('0.5');
      setDisplayNewPlayer('0');
    }

    const showPlayerFields = (e) =>{
      setDisplayNewPlayer('1')
      setMainOpacity('0.5');
      setDisplayNewArticle('0')
    }

    const hideForms = (e)=>{
      setDisplayNewArticle('0')
      setDisplayNewPlayer('0')
      setMainOpacity('1')
    }
    const handleLogout = (e) => {
    
        axios.delete(`${url}/logout`).then((res)=>{
          if(res.data === false){
            setSuccess(false)
          }
        })
        setMainOpacity('1');
        setDisplayNewArticle('0');
        e.preventDefault();
    }

 
  return (        
    <>        
        <div className="admin-bar">
            <div className="admin welcome"><IconUser/><span>Καλώς ήλθες</span></div>
            <div className='admin add'> <IconPlus/><span>Προσθήκη :</span>
                <IconNews  className='icon-link' />
                <button id='add-article' onClick={showArticleFields}> Άρθρου </button>
                <IconBallFootball className='icon-link' />
                <button id='add-player' onClick={showPlayerFields}> Παίχτη  </button> 
            </div>
            <div className='admin edit'> <IconEdit/><span>Επεξεργασία :</span> 
                <IconNews  className='icon-link' />
                <Link to={`/news`} className="link" onClick={hideForms}>Άρθρου</Link>
                <IconBallFootball className='icon-link' />
                <Link to={`/team`} className="link" onClick={hideForms}>Παίχτη</Link>
            </div>
            <div className='admin logout' onClick={handleLogout} > <IconLogout/>Αποσύνδεση</div>
        </div>
        <div style={{opacity: displayNewArticle}}>
          <NewArticle setDisplayNewArticle={setDisplayNewArticle}  setMainOpacity={setMainOpacity} /> 
        </div>
        <div style={{opacity: displayNewPlayer}}>
          <NewPlayer setDisplayNewPlayer={setDisplayNewPlayer}  setMainOpacity={setMainOpacity} />
        </div>
        
    </>     
  )
}

export default AdminBar
