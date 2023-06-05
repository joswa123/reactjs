import { useState } from "react"
export default function Random(){
    const [back,setback]=useState('rgb(255, 99, 71)')
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let l="#";
    let c=() =>{  
     setback(l+randomColor);
    }
    let g=() =>{
        setback('red')
    }
    let h=() =>{    
                setback('blue')
    }
   

    // let img5=("")
    return(
        <div  className="d-flex">
         <div style={{background:back}} height={'100px'}className="container">
     <div>    
     <center> 
     <button onClick={c} className="btn btn-warning m-3 text-center"> random colors</button>
     </center></div>
     <div>    
     <center> 
     <button onClick={g} className="btn btn-warning m-3 text-center"> red</button>
     </center></div>     <div>    
     <center> 
     <button onClick={h} className="btn btn-warning m-3 text-center"> blue</button>
     </center></div>
     </div> 
   
         </div>
    )
}