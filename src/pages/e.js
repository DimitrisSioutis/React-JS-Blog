import '../styles/Home.css'
import React, { useState } from 'react';

const Home = () => {

    const [margin,setMargin] = useState('420px')
    const [font,setFont] = useState('20px')

    function mouseOver (key){
      setMargin('320px')
      setFont('40px')
    }

    function mouseOut(key){
      setMargin('420px')
      setFont('20px')
    }

    const arrayDivs =[]

    for (let i=0; i<=2; i++){
      const div = React.createElement(
        'div',                                                                                                                  //type
        {key:i, dclassName: 'column',id:`column${i+1}`},                                                                          //properties of element
            React.createElement('p',                                                                                            //children of element
                                {key:i, className:'title', id:`title${i+1}`,style: {marginTop: margin, fontSize: font},onMouseOver: mouseOver(), onMouseOut:mouseOut()}),
                                `title${i+1}`)  
      arrayDivs.push(div)
    } 

    return(<div className='carousel'>
      {
        arrayDivs
      }
    </div>)
  }
  
export default Home;

import '../styles/Home.css'
import React, { useState } from 'react';

const Home = () => {

  const [margin,setMargin] = useState('420px')
  const [font,setFont] = useState('20px')

  function mouseOver (){
    setMargin('320px')
    setFont('40px')
  }

  function mouseOut(){
    setMargin('420px')
    setFont('20px')
  }

  return(
      <div className='carousel'>
          <div className='column' id='column1' onMouseOver={mouseOver} onMouseOut={mouseOut}>
              <p className='title' id='title1' style={{marginTop: margin,fontSize: font ,color:'black'}} > Τitle 1  </p>
              <p className='markdown' id='markdown1'>mark1 </p>
          </div>
          <div className='column' id='column2' onMouseOver={mouseOver} onMouseOut={mouseOut}>
             <p className='title' id='title2' style={{marginTop: margin,fontSize: font ,color:'black'}} > Τitle 2</p>
             <p className='markdown' id='markdown2'> mark2</p>
          </div>
          <div className='column' id='column3' onMouseOver={mouseOver} onMouseOut={mouseOut}>
             <p className='title' id='title3' style={{marginTop: margin,fontSize: font ,color:'black'}} > Τitle 3</p>
             <p className='markdown' id='markdown3'> mark3</p>
          </div>
       </div>
    )
  }


  {posts.map(post=>(
    <div className='column'>
      <p className='title'> {post.title} </p>
      <p className='markdown'>{post.markdown} </p>
    </div>
 ))}

   /*const Banner =[]

   for (let i=0; i<=2; i++){
      Banner[i] = React.createElement(
         'div',                                                                     //type
         {className: 'column' ,key: i},                                             //properties of element
            React.createElement('p', {className:'title' ,key: i},articles[i].title) ,
            React.createElement('p', {className:'markdown'},`mark${i+1}`))         //children of element                                    
   }*/

export default Home;


const articles =  posts.map(post => 
  React.createElement('div',{className: 'article-body'},
     React.createElement('div', {className: 'article-image-container'},
        React.createElement('img',{src: `${post.image}`})),
     React.createElement('div',{className: 'article-container'},
        React.createElement('h4',{className: 'article-title'},post.title),
        React.createElement('div',{className: 'date'},post.createdAt),
        React.createElement('div',{className: 'article-markdown'},post.markdown),
        React.createElement('div',{className: 'read-more'}, 
           React.createElement('a', {className:'read-more' },'Read More')))))

           <div id="article-body">
           <div class="article-image-container">
               <img src={article.image}/>
           </div>
           <div class="article-container">
               <h4 class="article-title"> {article.title} </h4>
               <div class="date"> {article.createdAt}</div>
               <div class="markdown"> {article.markdown}</div>
               <div class="read-more" id="read-more">
                   <a class="read-more" id="a" href="articles/">Read More</a>
               </div>
           </div>
       </div>
  const handleSubmit = async () => {

    var form = new FormData();
    form.append('title', title);
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:8080/api/articles/new",
        data: form,
        headers: { "Content-Type": "multipart/form-data" },
      }).then(() => {
        console.log(form);
      });
    } catch (error) {
      console.log(error);
    }
  };