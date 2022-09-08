import React, { useState}from 'react'
import axios from 'axios';
import { useLocation, useNavigate,useParams ,Link} from 'react-router-dom';
import '../styles/ArticleFields.css'

const ArticleFields = ({articles,setArticles}) => {

    const navigate = useNavigate();
    const {method} = useParams()
    const location = useLocation();
    const {article} = location.state


    const [title,setTitle] = useState(article.title);
    const [description,setDescription] = useState(article.description);
    const [markdown,setMarkdown] = useState(article.markdown);
    const [image,setImage] = useState(article.image);
  
  
    const handleSubmit = (e) =>{
      const newArticle = { title: title , description: description, markdown: markdown, image: image };
      
      if(method === 'new'){
            axios.post('http://localhost:8080/api/articles/new',newArticle) .then((res)=>{
                const allArticles = {...articles,newArticle};
                setArticles(allArticles);
                const savedArticle = res.data.article
                navigate(`../article/${savedArticle.slug}`,{state:{article:savedArticle}})
            })
        }

      if(method === 'edit'){
            axios.put(`http://localhost:8080/api/articles/edit/${article._id}`,newArticle) .then((res)=>{
                const allArticles = {...articles,newArticle};
                setArticles(allArticles);
                const savedArticle=res.data.article;
                navigate(`/article/${savedArticle.slug}`,{ state:{article: savedArticle} }) 
            })
        }

      e.preventDefault()
    }
  return (
    <div className="fields-container">
    <form onSubmit={handleSubmit} className="fields">
        <div className="field">
            <label for="title">Title :</label>
            <input required defaultValue={article.title}  type="text" id="title" onChange={(e)=>{setTitle(e.target.value);}}/>
        </div>
        <div className="field">
            <label for="description">Description :</label>
            <textarea defaultValue={article.description} id="description" onChange={(e)=>{setDescription(e.target.value);}}></textarea>
        </div>
        <div className="field">
            <label for="markdown">Markdown : </label>
            <textarea required defaultValue={article.markdown} id="markdown" onChange={(e)=>{setMarkdown(e.target.value);}}></textarea>
        </div>
        <div className="field">
            <label for="image">Image URL : </label>
            <input defaultValue={article.image} type="text" name="image" id="image" onChange={(e)=>{setImage(e.target.value);}}/>
        </div>
        <div className="options">
            <Link to="/news" style={{textDecoration:'none'}}>
                <div className="cancel">
                    Cancel
                </div>
            </Link>
            <div className="save">
                <button type="submit">Save</button>
            </div>
        </div>
    </form>
    </div>
  )
}

export default ArticleFields
