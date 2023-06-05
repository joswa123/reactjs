import axios from "axios"

import { useEffect, useState } from "react"
import { API } from "./api"
import { useNavigate } from "react-router-dom"

export default function Readc(){
    const home=useNavigate()
    const [read,setread]=useState([])
    useEffect(()=>{
    axios.get(API).then((r)=>{
            setread(r.data) }
    )
    },[])
   const g= ()=>{
    home('/')

   }
   const del=(d)=>{
    // axios.delete(`${API}/${a}`).then(()=>{
        axios.delete(`${API}/${d}`).then(()=>{
            axios.get(API).then((r)=>{
                setread(r.data)
            })

    })


   }
    return(
        <div>
             <h1>Read contact</h1>
             <table className="table">
                    <thead>
                        <tr className="bg-dark text-white">
                            <th>firstname</th>
                            <th>lastname</th>
                            <th>company</th>
                            <th>jobtitle</th>
                            <th>email</th>
                            <th>phone</th>
                            <th>birthday</th>
                            <th>delete</th>
                        </tr>
                        
            {read.map((h)=>(
               
               <tr className="bg-info">
                <td> {h.Name}</td>
               <td>{h.L}</td>
               <td>{h.Comp}</td>
               <td>{h.Jobtitle}</td>
               <td>{h.Email}</td>
               <td>{h.phone}</td>
               <td>{h.Dob}</td>
               <td><button className="btn btn-primary" onClick={()=>del(h.id)}  >delete    </button></td></tr>
                   
       ))}
                       
                          
                    </thead>
                              
                </table>
    
         
            <center><button className="align-center bg-warning" onClick={g}>home</button></center>
        </div>
    )
}