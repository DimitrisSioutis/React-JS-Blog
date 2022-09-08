import React,{useEffect} from 'react';
import axios from 'axios';
import { Link, useLocation,useNavigate} from "react-router-dom"
import Moment from 'moment';
import '../styles/ShowPlayer.css'

const ShowPlayer = ({success}) => {
  const location = useLocation()
  const {player} = location.state
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo({top: 0});
  }, [location]);

  const sendDeleteRequest = (e)=>{
    axios.delete(`http://localhost:8080/api/players/delete/${player._id}`).then(navigate('/'))
    e.preventDefault()
  }

  return (
    <div className="show-player-container">

      <div className="background">
        <div className="image">
          <img
            src={player.background}
            alt="diana"
          />
        </div>
        <div>
          <span className="firstname">
            {player.firstname.toLocaleUpperCase()}
          </span>
          <span className="lastname">
            {player.lastname.toLocaleUpperCase()}
          </span>
        </div>
      </div>      
      <div className="bottom-container">
        <div className="flex-container">
          <div className="number-image">
            <span>{player.number}</span>
            <img src={player.image} />
          </div>
          <div className="player-info">
            <p className='no-name'>{player.number} {player.firstname} {player.lastname}</p>
            <div className="labels-values">
              <div className="labels">
                <p>Position :</p>
                <p>Birthday :</p>
                <p>Appearances :</p>
                <p>Goals :</p>
              </div>
              <div className="values">
                <p>{player.position} </p>
                <p>{Moment(player.birthday).format('MMMM Do YYYY')} </p>
                <p>{player.appearances} </p>
                <p>{player.goals} </p>
              </div>
            </div>

          </div>
        </div>
          {success &&
            <div className="player-opt">      
              <Link className="edit-player" to={`/players/edit`} key={player.id} state= {{ player: player}}  style={{ textDecoration: "none"}}>Edit</Link>
              <form method="POST">
                  <button type="submit" className="delete-player" onClick={sendDeleteRequest}>Delete</button>
              </form>
            </div>
          }    
      </div>

    </div>
  );
}

export default ShowPlayer
