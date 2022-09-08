import React , { useState, useEffect } from 'react'
import '../styles/Header.css'
import logo from '../logo.png'
import {Socials} from '../components/Socials'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link , useNavigate} from "react-router-dom"

export default function Header({search,setSearch,searchResults,success}){
    

    const navigate = useNavigate();

    const [topAttribute,setTopAttribute] = useState('0');
    useEffect(()=>{
        if (success){
            setTopAttribute('30px')
        }else{
            setTopAttribute('0')
        }
    },[success]);

    const handleSearchSubmit = (e) =>{
        navigate('/search',{ state:{search: searchResults} })
        e.preventDefault()
    }

    return( 
        <header style={{top : topAttribute}}>                 
            <div className='nav-bar'>  
                <div className='logo-socials'>
                    <Link to='/'><img src={logo} className='logo' alt="ΑΟ ΔΙΑΝΑ"/></Link>
                    <div className="search">
                        <form onSubmit={handleSearchSubmit}>
                            <input id="input" type="text" autoComplete="off" placeholder="Αναζήτηση..." value={search} onChange={(e) => {setSearch(e.target.value);}}/>
                        </form>
                    
                       
                        <div className="autocom-box" id="autocom-box">
                            <ul>
                                {searchResults.map((item, index) => {
                                    if (search.length > 0) {
                                        return(<li><Link to={`/blog/${item.slug}`} state= {{ article: item}} style={{ textDecoration: "none"}}>{item.title}   <img src={item.image} alt='Diana'/></Link></li>)
                                    }
                                })
                                }
                            </ul>
                        </div>
                        
                    </div>

                    <div className='social'>
                        <ul className='social-links'>
                            {Socials.map( (item,index)=>{
                                return (    <li key={index}><a href={item.url}><FontAwesomeIcon icon={item.icon}/></a></li>   ) })}
                        </ul>                                 
                    </div>

                </div>
                    <nav className='menu'>
                        <ul className='nav'>
                            <li id="home"><Link to="/" id="a-home">Αρχική</Link></li>
                            <li><Link to="/history">Ιστορία</Link></li>
                            <li><Link to="/news" >Νέα</Link></li>
                            <li><Link to="/team">Ομάδα</Link></li>
                            <li><Link to="/contactus" id="contactus">Επικοινωνία</Link></li>   
                        </ul>
                    </nav>
            </div>
        </header>)}
