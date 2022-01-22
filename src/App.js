
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import MovieDetails from "./components/MovieDetails/MovieDetails";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";
import './App.scss';
function App() {
  return (
 <div className="app">
     <Header/>
     <div className="container">
   <Routes>
     <Route path={"/"} element = {<Home/>} />
     <Route path={"/movie/:imdbID"} element = {<MovieDetails/>} />
     <Route element = {<PageNotFound/>} />
   </Routes>
     </div>
     <Footer/>
 </div>)
}

export default App;
