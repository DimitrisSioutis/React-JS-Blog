import '../styles/PlayerFields.css'
import React, { useState}from 'react'
import axios from 'axios';
import { useLocation, useNavigate,useParams ,Link} from 'react-router-dom';

const PlayerFields = ({players,setPlayers}) => {

    /* 
    const endpoint  = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=1&srsearch=${firstname+' '+lastname}`
        const fetchInfo = async () => {
            const response = await fetch(endpoint)
            const json = await response.json()
            setInfo(json.query.search[0].snippet);
            console.log(info)
        }
        fetchInfo();
    */
    const navigate = useNavigate();
    const {method} = useParams()
    const location = useLocation();
    const {player} = location.state


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
        const newPlayer = { firstname:firstname, lastname:lastname, birthday:birthday,number:number,  position:position, appearance:appearances,goals:goals, background:background, image:image };
        
        if(method === 'new'){
            axios.post('http://localhost:8080/api/players/new',newPlayer).then((res)=>{
                const allPlayers = {...players,newPlayer};
                setPlayers(allPlayers);
                const savedPlayer = res.data.player
                navigate(`../team/${savedPlayer.slug}`,{state:{player:savedPlayer}})
            })
        }

        if(method === 'edit'){
            axios.put(`http://localhost:8080/api/players/edit/${player._id}`,newPlayer).then((res)=>{
                const allPlayers = {...players,newPlayer};
                setPlayers(allPlayers);
                const savedPlayer=res.data.player;
                navigate(`/team/${savedPlayer.slug}`,{ state:{player: savedPlayer} }) 
            })
        }

      e.preventDefault()
    }
  return (
    <div className="form-wrapper">
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
                    <div className="input"><input type="text" defaultValue={player.birthday} onChange={(e)=>{setBirthday(e.target.value);}}/></div>
                    <div className="input"><input type="text" defaultValue={player.number} onChange={(e)=>{setNumber(e.target.value);}}/></div>
                    <div className="input"><input type="text" defaultValue={player.position} onChange={(e)=>{setPosition(e.target.value);}}/></div>
                    <div className="input"><input type="text" defaultValue={player.appearances} onChange={(e)=>{setAppearances(e.target.value);}}/></div>
                    <div className="input"><input type="text" defaultValue={player.goals} onChange={(e)=>{setGoals(e.target.value);}}/></div>
                    <div className="input"><input type="text" defaultValue={player.image} onChange={(e)=>{setImage(e.target.value);}}/></div>
                    <div className="input"><input type="text" defaultValue={player.background} onChange={(e)=>{setBackground(e.target.value);}}/></div>
                </div>  
            </div>
      
            <div className="player-fields-options">
            <Link to="/team" style={{textDecoration:'none'}}>
                <div className="cancel">Cancel</div>
            </Link>
            <div><button type="submit">Save</button></div>
        </div>
        </form>


    </div>
  )
}

export default PlayerFields
