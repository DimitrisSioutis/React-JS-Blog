import React from 'react'
import {Link} from 'react-router-dom'

export default function Player({player,key}){

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
      </div>
    

  )
}
