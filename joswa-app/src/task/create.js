    import axios from "axios";
    import { useState } from "react";
    import { API } from "./api";
import { useNavigate } from "react-router-dom";

    export default function Create(){
        const navi = useNavigate();
        const [name,setname]=useState('');
        const d = (e)=>{
    e.preventDefault();
    // console.log(name);

    axios.post(API,{NAME:name})
    setname('')
    navi('/r')
        }
        return(
            <div>
                <form onSubmit={d}>
                    <input type="text" value={name} onChange={(e)=>setname(e.target.value)}></input>
                    <input type="submit"></input>
                </form>
            </div>  
        )
    }