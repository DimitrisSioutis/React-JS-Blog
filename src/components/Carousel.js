import React from 'react'
import { Link } from 'react-router-dom'

export default function Carousel({articles}){

    return(
        
        <div className="carousel">
            {articles.slice(0, 3).map(article => (
            
                <div className="column" key={article.id} id={`column${articles.indexOf(article)}`} style={{ backgroundImage: `url("${article.image}")` }}>
                    <Link to={`blog/${article.slug}`} key={article.id} state= {{ article: article}} style={{ textDecoration: "none"}}>
                    <p className="title"> 
                        {article.title }
                    </p>
                    <p className="description"> {
                        (article.description).lenght <=80
                            ? article.description 
                            : `${(article.description).slice(0,80)}...`
                        } 
                    </p>
                    </Link>
                </div>
            ))}
        </div>
        
    )
}