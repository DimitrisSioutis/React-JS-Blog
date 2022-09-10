import '../styles/Players.css'
import Player from '../components/Player'
import React from 'react'

const Team = ({players,success,setPlayers}) => {

  const positions = [{h1:'Τερματοφύλακες',name:'goalkeeper'},{h1:'Αμυντικοί',name:'defender'},{h1:'Μέσοι',name:'midfielder'},{h1:'Επιθετικοί', name:'forward'}]

    return(
      <>      
      <h1 className="page-title">Πρώτη Ομάδα</h1>
          {positions.map((position)=>{
            return (
              <div className="row ">
              <h3>{position.h1}</h3>
              <div className="players">
                {players.filter(player => player.position === position.name).map(player =>
                    <Player success={success} player={player} players={players} setPlayers={setPlayers} />
                )}
              </div>
            </div>
            )
          })}

      </>
    )
}
  
export default Team;