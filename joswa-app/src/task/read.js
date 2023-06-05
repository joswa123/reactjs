import axios from "axios"
import { API } from "./api"
import { useEffect, useState } from "react";

export default function Read(){
    const [name,setname]=useState([]);
 useEffect(()=>{
    axios.get(API).then((t)=>{
        setname(t.data);
})
 },[])


//del


const del = (a)=>{
axios.delete(`${API}/${a}`).then(()=>{
    axios.get(API).then((t)=>{
        setname(t.data);
})                                                         
})
}

    return(
        <>
        <h1>read</h1>
        {name.map((r)=>(
            <tr>
                <td>{r.NAME}</td>
                <td><button onClick={()=> del(r.id)}>del</button></td>
            </tr>
        )
        )}
        </>
    )
}