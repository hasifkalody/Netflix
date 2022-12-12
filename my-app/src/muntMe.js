import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


function MuntMe() {
    const[count,changecount]=useState(1)
    const[count2,changecount2]=useState(1)
    useEffect(()=>{
        console.log("Mounting")
        console.log("updated"+count)
        console.log("updated"+count2)
        
        return( ()=>{
            console.log("UnMounting")})
    
    },[count2,count])
    

  return (
    <div>
      <p style={{color:"red",fontSize:"33px",userSelect:"none"}}>Hi! I am Mounted:  {count}</p>
      <button style={{transform:"scale(2)",marginLeft:"50px"}} on onClick={()=>{
        changecount(count+1)
      }}>button</button>

      <p style={{color:"red",fontSize:"33px",userSelect:"none"}}>Hi! I am Mounted:  {count2}</p>
      <button style={{transform:"scale(2)",marginLeft:"50px"}} on onClick={()=>{
        changecount2(count2+1)
      }}>button</button>
    </div>
  )
}

export default MuntMe
