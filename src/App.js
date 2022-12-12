import "./App.css"
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from "./components/Header/Header";
import RowPost from "./components/RowPost/RowPost";
import {NetflixOriginals,Action,ComedyMovies,Documentaries,Horror} from './url'
// import './ToDo.css';
// import { useState } from 'react';
// import Me from './here'

function App() {
 return(
   <div>
        <Navbar/>
        <Header/>
        <RowPost title="Netflix Originals" url={NetflixOriginals}/>
        <RowPost title="Action" url={Action} small/>
        <RowPost title="ComedyMovies" url={ComedyMovies} small/>
        <RowPost title="Documentaries" url={Documentaries} small/>
        <RowPost title="Horror" url={Horror} small/>
        
        
   </div>
 )
}

export default App;