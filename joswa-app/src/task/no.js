import { useNavigate } from "react-router-dom"

export default function Nopage(){
    const naviga= useNavigate()
    const z=(e)=> {
   
    naviga('/')
}
    return(
        <>
        <img src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif"></img>
        <button onClick={z}>go to home</button>
        
        </>
    )
}