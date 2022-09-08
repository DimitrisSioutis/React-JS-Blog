import React , { useState  } from 'react'
import axios from 'axios';
import '../styles/EditArticle.css'

export default function EditArticle({article,setDisplayEdit,articles,setArticles}) {
    
    const url = 'https://api-for-react-project.herokuapp.com/api'
    //const url = 'http://localhost:8080/api'
    const [title,setTitle] = useState(article.title);
    const [description,setDescription] = useState(article.description);
    const [markdown,setMarkdown] = useState(article.markdown);
    const [image,setImage] = useState(article.image);

    const editArticle = (e) =>{
        
        const newArticle = { title: title , description: description, markdown: markdown, image: image };
        axios.put(`${url}/articles/edit/${article._id}`,newArticle) .then((res)=>{
            const allArticles = {...articles,newArticle};
            setArticles(allArticles);
        })
        e.preventDefault()
        setDisplayEdit('none'); 
    }

  return (
    <form onSubmit={editArticle} className="edit-fields">
        <div className="edit-container">  
            <div className='edit-labels'>
                <p >Title :</p>
                <p style={{paddingBottom:'50px'}}>Description :</p>
                <p style={{paddingBottom:'45px'}}>Markdown : </p>
                <p >Image URL : </p>
            </div>
            <div className="edit-inputs">
                <input required defaultValue={article.title}  type="text" id="edit-title" onChange={(e)=>{setTitle(e.target.value);}}/>
                <textarea defaultValue={article.description} id="edit-description" onChange={(e)=>{setDescription(e.target.value);}}></textarea>
                <textarea required defaultValue={article.markdown}  id="edit-markdown" onChange={(e)=>{setMarkdown(e.target.value);}}></textarea>
                <input defaultValue={article.image} type="text" name="image" id="edit-image" onChange={(e)=>{setImage(e.target.value);}}/>
            </div>
        </div>            
        <div className="edit-options">
                <div className="cancel">
                    <a onClick={ (e)=>{setDisplayEdit('none'); e.preventDefault();}}>Cancel</a>
                </div>
                <div className="save">
                    <button type="submit">Save</button>
                </div>
            </div>
    </form>
    
  )
}

