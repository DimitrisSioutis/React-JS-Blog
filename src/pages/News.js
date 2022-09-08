import '../styles/Articles.css'
import Articles from '../components/Articles'
import React from 'react'

const News = ({articles,success}) => {

  return(
    <>
      <h4 className='page-title'> Νέα</h4>
      <Articles articles={articles} success={success}/>
    </>
 
  )
     
}
  
export default News;