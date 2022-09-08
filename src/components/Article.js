import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'moment'
import { IconArrowRight} from '@tabler/icons';

export default function Article({article,success}) {
  return (
    
    <Link to={`/blog/${article.slug}`} state= {{ article: article}} style={{ textDecoration: "none"}}>   {/* state passes the article to the link which renders the article page with access to the article*/}
        <div  className="article-body">
            <div className="article-image-container">
                <img src={article.image } alt="ΔΙΑΝΑ"/>
            </div>
            <div className="article-container">
                <h4 className="article-title">{article.title }</h4>
                <div className="date">{Moment(article.createdAt).format('DD/MM/YYYY')}</div>
                <div className="article-description">{article.description }</div>
                <div className="options">
                    <div className="read-more" id="read-more">
                        <a className="read-more" id="a" href={`/article/${article.slug}`}><span>Περισσότερα</span><IconArrowRight className='arrow'/></a>
                    </div>
                    {success &&
                        <>                    
                            <Link className="edit-article" to={`/articles/edit`} key={article.id} state= {{ article: article}}  style={{ textDecoration: "none"}}>Edit</Link>
                            <form method="POST">
                                <button type="submit" className="delete-article">Delete</button>
                            </form>
                        </>
                    }
                </div>
            </div>
        </div>
    </Link>
  )
}
