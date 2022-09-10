import '../styles/PlayerFields.css'
import React, { useState}from 'react'
import axios from 'axios';

const NewPlayer = ({players,setPlayers,setMainOpacity,setDisplayNewPlayer}) => {

    //const url = 'https://api-for-react-project.herokuapp.com/api'
    const url = 'http://localhost:8080/api'
    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [birthday,setBirthday] = useState('');
    const [number,setNumber] = useState('');
    const [position,setPosition] = useState('');
    const [appearances,setAppearances] = useState('');
    const [goals,setGoals] = useState('');
    const [image,setImage] = useState('');
    const [background,setBackground] = useState('');
  
    const handleSubmit = (e) =>{
        const newPlayer = { firstname:firstname, lastname:lastname, birthday:birthday,number:number,  position:position, appearances:appearances,goals:goals, background:background, image:image };
            axios.post(`${url}/players/new`,newPlayer).then((res)=>{
                const allPlayers = {...players,newPlayer};
                setPlayers(allPlayers);
                setFirstname('');
                setLastname('');
                setAppearances('');
                setBackground('');
                setBirthday('');
                setImage('');
                setGoals('');
                setPosition('');
            })
        setMainOpacity('1')
        setDisplayNewPlayer('0')
        e.preventDefault()
    }

    const cancelNewPlayer= () => {
        setDisplayNewPlayer('0')
        setMainOpacity('1')
    }
  return (
    <div className="player-fields-container">
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
                    <div className="input"><input type="text" onChange={(e)=>{setFirstname(e.target.value);}}/></div>
                    <div className="input"><input type="text" onChange={(e)=>{setLastname(e.target.value);}}/></div>
                    <div className="input"><input type="date" onChange={(e)=>{setBirthday(e.target.value);}}/></div>
                    <div className="input"><input type="number" onChange={(e)=>{setNumber(e.target.value);}}/></div>


                    <select className="select-position" onChange={(e)=>{setPosition(e.target.value);}} >
                        <option value="goalkeeper">Τερματοφύλακας</option>
                        <option value="defender">Αμυντικός</option>
                        <option value="midfielder">Μέσος</option>
                        <option value="forward">Επιθετικός</option>
                    </select>


                    <div className="input"><input type="number"  onChange={(e)=>{setAppearances(e.target.value);}}/></div>
                    <div className="input"><input type="number"  onChange={(e)=>{setGoals(e.target.value);}}/></div>
                    <div className="input"><input type="text" onChange={(e)=>{setImage(e.target.value);}}/></div>
                    <div className="input"><input type="text" onChange={(e)=>{setBackground(e.target.value);}}/></div>
                </div>  
            </div>
      

        </form>
        <div className="player-fields-options-wrapper">
            <div className="player-fields-options">
                <div  className="cancel">
                    <a onClick={cancelNewPlayer}>Cancel</a>
                </div>
                <div className="save">
                    <button type="submit" onClick={handleSubmit}>Save</button>
                </div>
            </div>
        </div>
    </div>

  )
}

export default NewPlayer
