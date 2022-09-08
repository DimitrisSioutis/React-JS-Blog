import '../styles/Home.css'
import React from 'react'
import Article from '../components/Article'
import Carousel from '../components/Carousel'

const Home = ({articles , displayEditArticle}) => {

   return(
      <>   
         <Carousel articles={articles}/>
         <div className="container">
            <div className="latest-news">
               <div className="blue-span"></div>
               <p>Τελευταία Νέα</p>
               <div className="red-span"></div>
            </div>
            <div className="articles-container">
                <div className="articles"> 
                    {articles.slice(3, 6).map(article=>(
                        <Article key={article.id} article={article} displayEditArticle={displayEditArticle}/>
                    ))}
                </div>
            </div>
         </div>
         
      </>
   )
}

export default Home;
