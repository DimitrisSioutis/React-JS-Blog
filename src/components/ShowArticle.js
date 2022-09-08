import { Link, useLocation, useNavigate } from "react-router-dom"
import React, {useEffect} from "react"
import axios from "axios"
import Moment from "moment"
import '../styles/ShowArticle.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faTwitter} from "@fortawesome/free-brands-svg-icons";
import { IconClock} from '@tabler/icons';
import logo from '../logo.png'

export default function Article({success,articles}){

    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
      window.scrollTo({top: 0});
    }, [location]);
  
    const { article } = location.state       /* with the use of the useLocation hook we have access to the article */

    const sendDeleteRequest = (e)=>{
        axios.delete(`http://localhost:8080/api/articles/delete/${article._id}`).then(navigate('/'))
        e.preventDefault()
    }
    return (
        <div className="page-wrapper">
            <div className="outside" style={{background: `url(${article.image}) no-repeat center fixed`}}>
                <div className="wrapper">
                    <div className="show-article-container" id="show-article-container">
                        <h1 className="show-article-title">{article.title}</h1>
                        <div className="show-article-date"><IconClock style={{height:'1.2vh'}}/>{Moment(article.createdAt).format('MMMM Do YYYY')}</div>
                        <div className='show-article-markdown'>{article.markdown}</div>
                            {success &&
                                <div className="opt">      
                                    <Link className="edit-article" to={`/articles/edit`} key={article.id} state= {{ article: article}}  style={{ textDecoration: "none"}}>Edit</Link>
                                    <form method="POST">
                                        <button type="submit" className="delete-article" onClick={sendDeleteRequest}>Delete</button>
                                    </form>
                                </div>
                            }                 
                    </div>
                    <div className="share-article">
                        <span>Μοιράσου το :</span>
                        <ul>
                            <a href="https://www.facebook.com/sharer/sharer.php?u=example.org" target="_blank" style={{textDecoration: "none"}}><li className="facebook"><FontAwesomeIcon icon={faFacebook}/><span>Facebook</span></li></a>
                            <a href="https://twitter.com/intent/tweet?text=Hello%20world" target="_blank" style={{textDecoration: "none"}}><li className="instagram"><FontAwesomeIcon  icon={faTwitter}/><span>Twitter</span></li></a>
                        </ul> 
                    </div>
                    <div className="line">
                        <hr /><img src={logo} alt="ΑΟ ΔΙΑΝΑ"/><hr />
                    </div>
                    <div className="other-articles-container">
                        <h1>Δείτε Επίσης</h1>
                        <div className="other-articles">
                        {articles.slice(0, 3).map(article => (
                            <Link to={`/blog/${article.slug}`} key={article.id} state= {{ article: article}} style={{ textDecoration: "none"}}  >
                                <div className="article-card" style={{ backgroundImage: `url("${article.image}")` }}>
                                    <div className="article-card-info">
                                        <p className="article-card-title"> {article.title }</p>
                                        <p className="article-card-description"> {article.description} </p> 
                                    </div>
                                </div>
                            </Link>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    )
}