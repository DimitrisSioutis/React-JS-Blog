import '../styles/EditPlayer.css'
import React, { useState}from 'react'
import axios from 'axios';
import Moment from 'moment';

const EditPlayer = ({player,players,setPlayers,setDisplayEditPlayer}) => {

    //const url = 'https://api-for-react-project.herokuapp.com/api'
    const url = 'http://localhost:8080/api'
    
    const [firstname,setFirstname] = useState(player.firstname);
    const [lastname,setLastname] = useState(player.lastname);
    const [birthday,setBirthday] = useState(player.birthday);
    const [number,setNumber] = useState(player.number);
    const [position,setPosition] = useState(player.position);
    const [appearances,setAppearances] = useState(player.appearances);
    const [goals,setGoals] = useState(player.goals);
    const [image,setImage] = useState(player.image);
    const [background,setBackground] = useState(player.background);
  
    const handleSubmit = (e) =>{
        const newPlayer = { firstname:firstname, lastname:lastname, birthday:birthday,number:number,  position:position, appearances:appearances,goals:goals, background:background, image:image };
            axios.put(`${url}/players/edit/${player._id}`, newPlayer).then((res)=>{
                const allPlayers = {...players,newPlayer};
                setPlayers(allPlayers);
            })
        e.preventDefault()
        setDisplayEditPlayer('none') 
    }

    const cancelEditPlayer = () => {
        setDisplayEditPlayer('none')
    }
  return (
    <div className="player-edit-container">
        <form  onSubmit={handleSubmit}>
            <div className="player-container">
                <div className="flex-labels">
                    <div className="label"><label for="firstname">Firstname</label></div>
                    <div className="label"><label for="lastname">Lastname</label></div>
                    <div className="label"><label for="birthday">Birth Date</label></div>
                    <div className="label"><label for="number">Number</label></div>
                    <div className="label"><label for="position">Position</label></div>
                    <div className="label"><label for="appearances">Appearances</label></div>
                    <div className="label"><label for="goals">Goals</label></div>
                    <div className="label"><label for="image">Image URL</label></div>
                    <div className="label"><label for="background">Background URL</label></div>
                </div>
                <div className="flex-inputs">
                    <div className="input"><input type="text" defaultValue={player.firstname} onChange={(e)=>{setFirstname(e.target.value);}}/></div>
                    <div className="input"><input type="text" defaultValue={player.lastname} onChange={(e)=>{setLastname(e.target.value);}}/></div>
                    <div className="input"><input type="date" defaultValue={Moment(player.birthday).format('YYYY-MM-DD')} onChange={(e)=>{setBirthday(e.target.value);}}/></div>
                    <div className="input"><input type="number" defaultValue={player.number} onChange={(e)=>{setNumber(e.target.value);}}/></div>


                    <select defaultValue = {player.position} className="select-position" onChange={(e)=>{setPosition(e.target.value);}} >
                        <option value="goalkeeper">Τερματοφύλακας</option>
                        <option value="defender">Αμυντικός</option>
                        <option value="midfielder">Μέσος</option>
                        <option value="forward">Επιθετικός</option>
                    </select>


                    <div className="input"><input type="number" defaultValue={player.appearances} onChange={(e)=>{setAppearances(e.target.value);}}/></div>
                    <div className="input"><input type="number" defaultValue={player.goals} onChange={(e)=>{setGoals(e.target.value);}}/></div>
                    <div className="input"><input type="text" defaultValue={player.image} onChange={(e)=>{setImage(e.target.value);}}/></div>
                    <div className="input"><input type="text" defaultValue={player.background} onChange={(e)=>{setBackground(e.target.value);}}/></div>
                </div>  
            </div>
      

        </form>
        <div className="player-fields-options-wrapper">
            <div className="player-fields-options">
                <div  className="cancel">
                    <a onClick={cancelEditPlayer}>Cancel</a>
                </div>
                <div className="save">
                    <button type="submit" onClick={handleSubmit}>Save</button>
                </div>
            </div>
        </div>
    </div>

  )
}

export default EditPlayer