import '../styles/Players.css'
import Player from '../components/Player'
import React from 'react'

const Team = ({players}) => {

    return(
      <>      
      <h1 className="page-title">Πρώτη Ομάδα</h1>
          <div className="row ">

            <h3>Τερματοφύλακες</h3>
            <div className="players">
              {players.filter(player => player.position ==='goalkeeper').map(player =>
                  <Player key={player.id} player={player} />
              )}
            </div>

          </div>


          <div className="row">

            <h3>Αμυντικοί</h3>
            <div className="players">
              {players.filter(player => player.position ==='defender').map(player =>
                  <Player key={player.id} player={player} />
              )}
            </div>

          </div>
          
          <div className="row">
            
            <h3>Μέσοι</h3>
            <div className="players">
              {players.filter(player => player.position ==='midfielder').map(player =>
                <Player key={player.id} player={player} />
              )}
              </div>

          </div>
          
          <div className="row">
            
            <h3>Επιθετικοί</h3>
            <div className="players">
              {players.filter(player => player.position ==='forward').map(player =>
                  <Player key={player.id} player={player} />
              )}
            </div>
          
          </div>
      </>
    )
}
  
export default Team;