
import './Header.css'
import axios from '../../Instance/Instance'
import {imageBaseUrl,api_key}from '../../Constants/Constants'
import { useEffect, useState } from 'react'
function Header() {
  const [Movie,changeState]=useState()
  
  useEffect(()=>{
    function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    axios.get(`/trending/all/week?api_key=${api_key}&language=en-US`).then((response)=>{
      changeState(response.data.results[getRndInteger(0,20)]) 
    })
  },[])
 
  return (
    <div  style={{backgroundImage:`url(${Movie?imageBaseUrl+Movie.backdrop_path:null} )` }} className='Header'>
      <div className="content">
        <h1 className="title">{Movie?Movie.title:""}</h1>
        <div className="buttons">
            <button className="button">Play</button>
            <button className="button">My List</button>
        </div>
        <h1 className="discription">{Movie?Movie.overview:""}</h1>
      </div>
      <div className="fade"></div>

    </div>
  )
}

export default Header
