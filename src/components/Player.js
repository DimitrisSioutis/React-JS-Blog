import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import EditPlayer from './EditPlayer'
import axios from 'axios'

export default function Player({player,success,setPlayers,players}){

  const [displayEditPlayer,setDisplayEditPlayer] = useState('none')

  const url = 'http://localhost:8080/api' ;
  //const url = 'https://api-for-react-project.herokuapp.com/api'
  
  const handleDelete = (e)=>{
      axios.delete(`${url}/players/delete/${player._id}`)
      e.preventDefault()
  }

  return(

      <div className="player" style={{ backgroundImage: `url("${player.image}")` }}>
        <Link to={`/team/${player.slug}`} state={{player:player}} style={{textDecoration:'none'}}>
        <div className="lastname-background" >
          <p className="lastname-paragraph">{player.lastname}</p>
        </div>
        
        <div className="info" id="info">
          <div className="inline1" id="number">{player.number}</div>
          <div className="inline1" id="firstname">{player.firstname}</div>
          <div className="inline1" id="lastname">{player.lastname}</div>
          <div className="position">{player.position}</div>

          <div className="hidden-stats">
            <div className="inline2">
              <div className="stat-title">Ημ/νία Γέννησης</div>
              <div>{new Date(player.birthday).toLocaleDateString()}</div>
            </div>
            <div className="inline2">
              <div className="stat-title">Συμμετοχές</div>
              <div>{player.appearances}</div>
            </div>
            <div className="inline2">
              <div className="stat-title">Γκολ</div>
              <div>{player.goals}</div>
            </div>
          </div>
        </div>
        </Link>
        {success &&
        <>
          <div className="admin-options">
            <button className="edit-article" onClick={(e)=>{setDisplayEditPlayer('block'); e.preventDefault()}}>Edit</button>
            <button className="delete-article" onClick={handleDelete} >Delete</button>
            <div className='hidden-div' style={{display: displayEditPlayer}}>
                <EditPlayer player={player} players={players} setPlayers={setPlayers} setDisplayEditPlayer={setDisplayEditPlayer}/>
            </div> 
          </div>
        </>}
        
      </div>
  )
}
