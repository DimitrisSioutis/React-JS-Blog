import React from "react"
import Article from "../components/Article"
import '../styles/Articles.css'

export default function News({articles,success,setArticles,displayEditArticle,setDisplayEdit}){


    const dates = []
    articles.forEach(article =>{                    /* we create an array with the date sliced for 0,10 which gives us output like : 2022-1-1  */
        dates.push(article.createdAt.slice(0,10))   /* we slice cause we want to eliminate any duplicates and keep only the day an article was created,not exact moment */
    })

    const uniqueDates = [...new Set(dates)];        /* with the use of set we remove duplicates */
    
    return(
        <>
            <h1 className='page-title'> Νέα</h1>
            <div className="articles-container">
                <div className="articles"> 
                {uniqueDates.map((date) => {
                    return (
                        <>
                            <div className="articles-datebased">
                                <div className="article-day ">
                                    <p className="weekday">{new Date(date).toLocaleDateString('gr', { weekday: 'long' })}</p>
                                    <div className="day-month">
                                        <p>{new Date(date).toLocaleDateString('gr', { day: 'numeric'})}</p>
                                        <p style={{marginLeft: '10px'}}>{new Date(date).toLocaleDateString('gr', { month: 'long'})}</p>
                                        <p style={{marginLeft: '10px'}}>{new Date(date).toLocaleDateString('gr', { year: 'numeric'})}</p>
                                    </div>
                                </div>

                                <div className="article-list">                          {/* we slice the date of each article and the we compare it with the date we iterating*/}
                                    {articles.map((article) => {                        {/* so the output will be the articles listed together based on the day they were published*/}
                                        if(article.createdAt.slice(0,10) === date){  
                                            return(<Article article = {article} success={success} articles={articles} setArticles={setArticles}/>)   
                                        }       
                                    })}
                                </div>                                                  
                            </div>
                            <div className="line-break">
                                <div className="skewd"></div>
                            </div>
                        </>
                    );
                })}
                </div>
            </div>
            </>
    )
}