import React ,{ useEffect, useState } from "react";
import {BrowserRouter ,Routes,Route, useLocation} from "react-router-dom";
import axios from "axios";

import Home from "./pages/Home";
import Team from "./pages/Team";
import History from "./pages/History";
import News from "./pages/News";
import Login from "./pages/Login";
import Missing from "./pages/Missing";

import Navbar from "./components/Navbar";
import ArticleFields from "./components/ArticleFields";
import PlayerFields from "./components/PlayerFields";
import AdminBar from "./components/AdminBar";
import ShowArticle from "./components/ShowArticle";
import Footer from "./components/Footer";
import ShowPlayer from "./components/ShowPlayer";
import Search from "./components/Search";

const App = () => {
  
  axios.defaults.withCredentials = true;

  const [players,setPlayers] = useState([])
  const [success,setSuccess]= useState(false)
  const [articles,setArticles] = useState([])
  const [search,setSearch] = useState('')
  const [searchResults,setSearchResults] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:8080/api/login').then((res)=>{
        if(res.data){
          setSuccess(true)
        }
    })
  },[])

  useEffect(()=>{
    axios.get('http://localhost:8080/api/articles').then((res)=>{
      setArticles(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  },[articles])

  useEffect(()=>{
    axios.get('http://localhost:8080/api/players').then((res)=>{
      setPlayers(res.data)
    }).catch((err)=>{
      console.log(err);
    })
  },[players])

  
  useEffect(() => {
    const filteredResults = articles.filter((article) =>
      ((article.title).toLowerCase()).includes(search.toLowerCase()));
      setSearchResults(filteredResults);
  }, [search])

  return (
    <>
      {success &&  <AdminBar setSuccess={setSuccess} />}
      <Navbar  search={search} setSearch={setSearch} searchResults={searchResults} success={success}/>
      <main>
      <Routes>
          <Route path="/" element={<Home articles={articles} />} />
          <Route path="/team" element={<Team players={players} />} />
          <Route path="/history" element={<History />} />
          <Route path="/news" element={<News articles={articles} success={success} />} />
          <Route path="/blog/:slug" element={<ShowArticle articles={articles} success={success}/>} />
          <Route path="/team/:slug" element={<ShowPlayer success={success} players={players} />} />
          <Route path="/articles/:method" element={<ArticleFields articles={articles} setArticles={setArticles} />} />
          <Route path="/players/:method" element={<PlayerFields players={players} setPlayers={setPlayers} />} />
          <Route path="/login" element={<Login success={success} setSuccess={setSuccess} /> } />
          <Route path="*" element={<Missing/>} />
          <Route path="/search" element={<Search/>} />      
      </Routes>        
      </main>
      <Footer/>
    </>
  );
};

export default App;
