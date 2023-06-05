import axios from "axios";
import { useState } from "react";
import { useActionData, useNavigate } from "react-router-dom"
import { API } from "./api";

export default function Conatact(){
    const lab =useNavigate()
    const [data,setdata]=useState('')
    const [arr,setarr]=useState('')
    const [mad,setmad ]=useState('')
    const [road,setroad]=useState('')
    const [head,sethead]=useState('')
    const [yin,setyin]=useState('')
    const [park,setpark]=useState('')
        const h =(e)=>{
    e.preventDefault();
       axios.post(API,{Name:data,L:arr,Comp:mad,Jobtitle:road,Email:head,phone:yin,Dob:park})
       setdata('')
     setarr('')
    setmad('')  
    setroad('') 
    sethead('')
    setyin('')
    }

   
    
    const w=()=>{
        lab('/');
    }
    return(
        <div>
            <center>
         <form className="mt-5" onSubmit={h}>
        <label for="fname">firstname:</label> 
        <input type="text" id="fname" value={data}  placeholder="firstname" onChange={(e)=>setdata(e.target.value)}></input><br>
        </br>
        <br/>
        <label for="lastname">lastname:</label>                     
        <input type="text" id="lastname" value={arr} onChange={(e)=>setarr(e.target.value)} placeholder="lastname"></input><br/><br/>
        <label for="company">company:</label> 
        <input type="text" id="company" value={mad} onChange={(e)=>setmad(e.target.value)} placeholder="company"></input><br/><br/>
        <input className="ms-5" type="text" id="jobtitle" value={road}  onChange={(e)=>setroad(e.target.value)} placeholder="jobtitle"></input><br/><br/>
        <label for="email">Email:</label> 
        <input type="text" id="email" value={head} onChange={(e)=>sethead(e.target.value)} placeholder="email"></input><br/><br/>
        <label for="phone">Phone:</label> 
        <input type="phone" id="phone" value={yin} onChange={(e)=>setyin(e.target.value)} placeholder="phone"></input><br/><br/>
        <label for="birthday">Birthday:</label>
       <input type="date" id="birthday" value={park} onChange={(e)=>setpark(e.target.value)} name="birthday"/><br/><br/>

       <input type="submit" value="save"></input><br/>
       <button onClick={w}>read</button>
        </form>
        </center>
        </div>
    )
}