import { useState } from "react"
export default function Calc(){

const [total, setDisplay] = useState("");


const clear = () =>{
    setDisplay("");
  
}
  const handleClick = (e) =>{
    setDisplay(total.concat(e.target.name));
  }
const  handleResult =()=>{
  setDisplay(eval(total).toString())
}

    return(


<center style={{boxSizing:"border-box"}}>
<div  data-aos="fade-right" style={{background: "#114357"}} className="w-25 "  >
<input style={{border:"none",background:"transparent",color:"white",fontSize:"40px" ,border:"solid"}} type={"tex"} value={total} className="display ps-5 w-75 bg-dark mt-3"></input>

<br></br>
<br></br>
<div>
<div className=" p-2 "  style={{  boxshadow: "-8px -8px 15px rgba(255, 255,255, 0.1),5px 5px 15px rgba(0, 0,0, 0.2)"}}>
    <button className="btn btn-lg btn-dark  me-3 rounded-circle "   name="7" onClick={handleClick}>7</button>
    <button className="btn btn-lg btn-dark me-3 rounded-circle"  name="8" onClick={handleClick}>8</button>
    <button  className="btn btn-lg btn-dark me-3 rounded-circle" name="9" onClick={ handleClick}>9</button>
    <button className="asd btn btn-lg btn-dark me-3 rounded-circle" name="/" onClick={handleClick}>÷</button>
    <br></br>
    </div>

    
    <div style={{marginTop:"10px",boxShadow: "-8px -8px 15px rgba(255, 255,255, 0.1),5px 5px 15px rgba(0, 0,0, 0.2)"}} >

    <button className="btn btn-lg btn-dark me-3 rounded-circle" name="4" onClick={ handleClick}>4</button>
    <button className="btn btn-lg btn-dark me-3 rounded-circle" name="5" onClick={ handleClick}>5</button>
    <button className="btn btn-lg btn-dark me-3 rounded-circle"  name="6" onClick={ handleClick}>6</button>
    <button className="asd btn btn-lg btn-dark me-3 rounded-circle" name="*"  onClick={handleClick}>x</button>
    <br></br>
    </div>

    <div style={{marginTop:"10px" , boxshadow:" -8px -8px 15px rgba(255, 255,255, 0.1),5px 5px 15px rgba(0, 0,0, 0.2)"}} >

    <button className="btn btn-lg btn-dark me-3 rounded-circle" name="1" onClick={handleClick}>1</button>
    <button className="btn btn-lg btn-dark me-3 rounded-circle" name="2" onClick={ handleClick}>2</button>
    <button className="btn btn-lg btn-dark me-3 rounded-circle" name="3" onClick={ handleClick}>3</button>
    <button className="asd btn btn-lg btn-dark me-3 rounded-circle" name="-" onClick={ handleClick}>-</button>
    <br></br>
    </div>


<div className="pb-3" style={{marginTop:"10px",marginLeft:"-5px" , boxshadow:" -8px -8px 15px rgba(255, 255,255, 0.1),5px 5px 15px rgba(0, 0,0, 0.2)"}} >

    <button className="btn btn-lg btn-dark me-3 rounded-circle" name="0" onClick={ handleClick}>0</button>
    <button className="asdf btn btn-lg btn-dark me-3 rounded-circle"  onClick={clear}>C</button>
    <button className="asd btn  btn-lg btn-dark me-2 rounded-circle"name="+" onClick={ handleClick}>+</button>
    <button className="asdg btn btn-lg btn-dark  rounded-circle" name="=" onClick={ handleResult}>=</button>
    
    </div>
    </div>
   
  

 

</div>
</center>
    )
}


