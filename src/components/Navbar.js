import React , { useState,useRef, useEffect } from 'react'
import '../styles/Header.css'
import logo from '../logo.png'
import useClickOutside from "./useClickOutside";
import {Socials} from '../components/Socials'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link , useNavigate} from "react-router-dom"

export default function Header({search,setSearch,searchResults,success}){
    
        const [hide, setHide] = useState(false);
        const autoCompleteRef = useRef();
        useClickOutside(autoCompleteRef, () => setHide(true));
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
                    <div ref={autoCompleteRef}>
                        <div className="search">
                            <form onSubmit={handleSearchSubmit}>
                                 <input id="input" type="text" autoComplete="off" placeholder="Αναζήτηση..."
                                    value={search}
                                    onChange={(e) => {setSearch(e.target.value);}}
                                    onFocus={() => {setHide(false);}}/>
                            </form>
                        </div>

                        {!hide && (
                            <div className="autocom-box" id="autocom-box">
                                <ul>
                                    {searchResults.map((item, index) => {
                                        if (search.length > 0) {
                                            return(
                                                <li>                                             
                                                <Link to={`/article/${item.slug}`} state= {{ article: item}} style={{ textDecoration: "none"}} >
                                                    {item.title}   
                                                    <img src={item.image}/>
                                                </Link></li>
                                            ) 

                                        }
                                    })}
                                </ul>
                            </div>
                            )}
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
                            <li id="home"><a href="/" id="a-home">Αρχική</a></li>
                            <li><a href="/history">Ιστορία</a></li>
                            <li><a href="/team">Ρόστερ</a></li>
                            <li><a href="/schedule">Πρόγραμμα</a></li>
                            <li ><a href="/news" id="news">Νέα</a></li>
                        </ul>
                    </nav>
                
            </div>
        </header>
        
    )
  }
