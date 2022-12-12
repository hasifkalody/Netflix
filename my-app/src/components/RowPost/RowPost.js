import React, { useEffect, useState } from 'react'
import axios from '../../Instance/Instance'
import { imageBaseUrl,api_key} from '../../Constants/Constants'
import './RowPost.css'
import YouTube from 'react-youtube';
function RowPost({small,title,url}) {
  const [Movie, setstate] = useState()
  const [trailerId, updId] = useState()

  useEffect(() => {
    axios.get(url).then((response)=>{
      
      setstate(response.data.results)
    })
      
  }, []);
// start-------------------------for YouTube tailer-------------------------------
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }}

  function Trailer(id){
    axios.get(`/movie/${id}/videos?api_key=${api_key}&language=en-US`).then(response=>{
      const length=response.data.results.length-1
      console.log(length)
      // console.log(response.data.results)
      function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }
      updId(response.data.results[getRndInteger(0,length)].key)
    })
  };
  // End-------------------------for YouTube tailer-------------------------------

  return (
    <div className="Row">
        <h2>{title}</h2>
        <div className="posters">
          {Movie? Movie.map((x)=><img onClick={()=>{Trailer(x.id)}} className={small?"small":"posterimg"} src={`${imageBaseUrl+x.backdrop_path}`} alt="" />

          ):null}  
        </div>
        {trailerId && <YouTube videoId={trailerId} opts={opts} />}
    </div>
  )
}

export default RowPost
