import { useState } from "react";
export default function Addition(){
  
    const [name,setname]=useState(0);
  
    let j = ()=>{
      setname(name+1)
   
    }
    let k =() =>{
      setname(name-1)
    }
    let o=() =>{
      setname(0)
    }
  
    return(
  
      <div className=" bg-dark text-center">
   <h1 className="btn btn-light">{name}</h1>
 <center> <div className="text-center d-flex justify-content-center" >
       <button onClick={ j} className="btn btn-success me-2">+ </button>
       <button onClick={ k} className="btn btn-danger me-2">- </button>
         <button onClick={ o} className="btn btn-light">reset </button></div>
      
       </center></div>
    )
   }
