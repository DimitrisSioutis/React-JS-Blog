import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Moment from 'moment'
import { IconArrowRight} from '@tabler/icons';
import EditArticle from '../components/EditArticle'

export default function Article({article,success,setArticles}) {

    const handleDelete = (e)=>{
        axios.delete(`http://localhost:8080/api/articles/delete/${article._id}`)
        e.preventDefault()
    }

  const [displayEditArticle,setDisplayEdit] = useState('none')

  return (
    <>
        <Link to={`/blog/${article.slug}`} state= {{ article: article}} style={{ textDecoration: "none"}}>   {/* state passes the article to the link which renders the article page with access to the article*/}
            <article  className="article-body">
                <div className="article-image-container">
                    <img src={article.image } alt="ΔΙΑΝΑ"/>
                </div>
                <div className="article-container">
                    <h4 className="article-title">{article.title }</h4>
                    <div className="date">{Moment(article.createdAt).format('DD/MM/YYYY')}</div>
                    <div className="article-description">{article.description }</div>
                    <div className="options">
                        
                        <div className='read-more'><a id= "a"href={`/article/${article.slug}`}>Περισσότερα<IconArrowRight className='arrow'/></a></div>
                        
                        {success &&
                            <>                    
                                <button className="edit-article" onClick={(e)=>{setDisplayEdit('block'); e.preventDefault()}}>Edit</button>
                                <button onClick={handleDelete} className="delete-article">Delete</button>
                            </>
                        }
                    </div>
                </div>
            </article>
        </Link>
        {success &&
        <>  
            <div className='hidden-div' style={{display: displayEditArticle}}>
                <EditArticle article={article} setArticles={setArticles} setDisplayEdit={setDisplayEdit}/>
            </div>
        </>}
    </>
  )
}
