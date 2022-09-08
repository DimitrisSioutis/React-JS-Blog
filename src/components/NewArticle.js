import React, { useState}from 'react'
import axios from 'axios';
import '../styles/NewArticle.css'

const NewArticle = ({articles,setArticles,setDisplayNewArticle,setMainOpacity}) => {

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [markdown,setMarkdown] = useState('');
    const [image,setImage] = useState('');
  
    const postNewArticle = (e) =>{
        const url = 'https://api-for-react-project.herokuapp.com/api'
        const newArticle = { title: title , description: description, markdown: markdown, image: image };
       
        axios.post(`${url}/articles/new`,newArticle).then((res)=>{
            const allArticles = {...articles,newArticle};
            setArticles(allArticles);        
            setTitle('')
            setDescription('')
            setMarkdown('')
            setImage('')
        })
        setMainOpacity('1')
        setDisplayNewArticle('0')
        e.preventDefault()
    }

    const cancelNewArticle = () => {
        setDisplayNewArticle('0')
        setMainOpacity('1')
    }
  return (
    <div className="article-fields-container" >
        <form onSubmit={postNewArticle} className="article-form">
            
            <label for="title">Title :</label>
            <input required type="text" id="title" onChange={(e)=>{setTitle(e.target.value);}}/>
                
            <label for="description">Description :</label>
            <textarea id="description"onChange={(e)=>{setDescription(e.target.value);}}></textarea>
                
            <label for="markdown">Markdown : </label>
            <textarea required  id="markdown" onChange={(e)=>{setMarkdown(e.target.value);}}></textarea>
                
            <label for="image">Image URL : </label>
            <input type="text" name="image" id="image" onChange={(e)=>{setImage(e.target.value);}}/>    

            <div className='article-fields-options'>
                <div  className="cancel">
                    <a onClick={cancelNewArticle}>Cancel</a>
                </div>
                
                <div className="save">
                    <button type="submit">Save</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default NewArticle
