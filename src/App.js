import React ,{ useEffect, useState } from "react";
import {Routes,Route} from "react-router-dom";
import axios from "axios";

import Home from "./pages/Home";
import Team from "./pages/Team";
import History from "./pages/History";
import News from "./pages/News";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Missing from "./pages/Missing";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdminBar from "./components/AdminBar";
import ShowArticle from "./components/ShowArticle";
import ShowPlayer from "./components/ShowPlayer";
import Search from "./components/Search";

const App = () => {
  
  axios.defaults.withCredentials = true;
  const url = 'https://api-for-react-project.herokuapp.com/api'
  //const url = 'http://localhost:8080/api'

  const [players,setPlayers] = useState([])
  const [articles,setArticles] = useState([])
  const [users,setUsers] = useState([])
  const [success,setSuccess]= useState(false)
  const [search,setSearch] = useState('')
  const [searchResults,setSearchResults] = useState([])

  useEffect(()=>{
    axios.get(`${url}/login`).then((res)=>{
        if(res.data){
          setSuccess(true)
        }
    })
  },[])

  useEffect(()=>{
    axios.get(`${url}/articles`).then((res)=>{
      setArticles(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  },[articles])

  useEffect(()=>{
    axios.get(`${url}/players`).then((res)=>{
      setPlayers(res.data)
    }).catch((err)=>{
      console.log(err);
    })
  },[players])

  useEffect(()=>{
    axios.get(`${url}/users`).then((res)=>{
      setUsers(res.data)
    }).catch((err)=>{
      console.log(err);
    })
  },[])
  
  useEffect(() => {
    const filteredResults = articles.filter((article) =>
      ((article.title).toLowerCase()).includes(search.toLowerCase()));
      setSearchResults(filteredResults);
  }, [search,articles])

  const [mainOpacity,setMainOpacity] = useState('1');


  return (
    <>
      {success &&  <AdminBar setSuccess={setSuccess} setMainOpacity={setMainOpacity}  />}
      <Navbar  search={search} setSearch={setSearch} searchResults={searchResults} success={success} />
      <main style={{opacity: mainOpacity}}>
      <Routes>
          <Route path="/" element={<Home articles={articles}/>} />
          <Route path="/history" element={<History />} />
          <Route path="/news" element={<News articles={articles} success={success} setArticles={setArticles} />} />
          <Route path="/team" element={<Team players={players} />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/blog/:slug" element={<ShowArticle articles={articles} />} />
          <Route path="/team/:slug" element={<ShowPlayer players={players} />} />
          <Route path="/login" element={<Login success={success} setSuccess={setSuccess} users={users} /> } />
          <Route path="*" element={<Missing/>} />
          <Route path="/search" element={<Search/>} />      
      </Routes>        
      </main>
      <Footer/>
    </>
  );
};

export default App;
