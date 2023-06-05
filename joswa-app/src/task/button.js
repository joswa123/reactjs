import { useNavigate } from "react-router-dom"

export default function Button(){
    const create =useNavigate()
    const y= ()=>{
        create('/f')

    }
    const Read =useNavigate()
    const n=()=>{
       Read('/r')
    }
    return(
        <center className="container mt-5">
        <div className=" bg-info text-center d-flex justify-content-between ps-5 pe-5">
            <button className=" btn btn-warning" onClick={y}>create</button>
            <button className=" btn btn-warning" onClick={n}>Read</button>
        </div>
        </center>
    )
}