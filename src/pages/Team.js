import '../styles/Players.css'
import Player from '../components/Player'
import React from 'react'

const Team = ({players}) => {

    return(
      <>      
      <h4 className="page-title">Πρώτη Ομάδα</h4>

        <div className='players-container'>

          <div className="row ">

            <h3>Τερματοφύλακες</h3>
            <div className="players">
              {players.filter(player => player.position ==='Goalkeeper').map(player =>
                  <Player key={player.id} player={player} />
              )}
            </div>

          </div>


          <div className="row">

            <h3>Αμυντικοί</h3>
            <div className="players">
              {players.filter(player => player.position ==='Defender').map(player =>
                  <Player key={player.id} player={player} />
              )}
            </div>

          </div>
          
          <div className="row">
            
            <h3>Μέσοι</h3>
            <div className="players">
              {players.filter(player => player.position ==='Midfielder').map(player =>
                <Player key={player.id} player={player} />
              )}
              </div>

          </div>
          
          <div className="row">
            
            <h3>Επιθετικοί</h3>
            <div className="players">
              {players.filter(player => player.position ==='Forward').map(player =>
                  <Player key={player.id} player={player} />
              )}
            </div>
          
          </div>
        </div>
      </>
    )
}
  
export default Team;