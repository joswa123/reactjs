import { useState } from "react";
export default function Photo1(){
    const [photo,setphoto]=useState('');
    let s=() =>{
     
     setphoto('https://nzbirdsonline.org.nz/sites/all/files/Morepork.jpg')
    }
    let d=() =>{
     setphoto('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMbJGeeGIjxAyzZUJ2Wvt04uRYojyNpDyWlg&usqp=CAU')
   }




return(
    <> 
      <div className=" ">
     <img src={photo} width={'200px'}></img><br></br>
        <div > <button className="btn btn-success p-2 m-3" onClick={s}>bird</button> 
        <button onClick={d} className="btn btn-success ">tv</button>
        </div>
      
       
        </div></>
)
}