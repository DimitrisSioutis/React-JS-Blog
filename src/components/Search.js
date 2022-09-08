import React from 'react'
import { useLocation } from 'react-router-dom';
import Article from '../components/Article';

const Search = () => {

  const location = useLocation()
  const {search} = location.state

  return (
    <>    
      <h1 className="page-title">Αποτελέσματα Αναζήτησης</h1>
      <div className="articles-container">
        <div className="articles">
          {search.map((item,index)=>(
            <Article article={item} />
          ))}
        </div>

      </div>
    </>


  )
}

export default Search
