import { BrowserRouter, Route, Routes } from "react-router-dom";
import Addition from "./task/addition.";

import Calculator from "./task/calculator";
import Create from "./task/create";


import Name from "./task/name";
import Photo1 from "./task/photo1";
import Random from "./task/random";
import Read from "./task/read";
import Table1 from "./task/table1";

import Task1 from "./task/task1";
import Nopage from "./task/no";
import Button from "./task/button";
import Conatact from "./task/contact";
import Readc from "./task/readc";

 export default function  App(){

  return(
    <div className="container">
    {/* <div>
      <div className=" bg-info d-flex justify-content-between p-2 ">
      <Name></Name>
      <div>
      <Task1> </Task1>
      </div>
      </div>
     
      
      
    </div>
    <div className="text-center bg-warning"><h1>react</h1></div>
   
   <div className="d-flex justify-content-evenly bg-dark">
   <div className="bg-light w-25" >
      <Addition></Addition>
    </div>
    
    
   
    
    <div >
      <Random></Random>
    </div>
    <div>
     <Photo1></Photo1>
    
    </div>
   </div>

    
   
    <div>
    <h1>Map function</h1>
    <Table1></Table1>
    </div>

    <div>
      


    </div>
    <div>
      <Create></Create>
      <Read></Read>
    </div> */}


<BrowserRouter>
<Routes>

{/* <Route path="/c" element={<Create></Create>}/>

<Route path="/r" element={<Read></Read>}/>
<Route path="*" element={<Nopage></Nopage>}/> */}
<Route path="/" element={<Button></Button>}/>
<Route path="*" element={<Nopage></Nopage>}/>
<Route path="/f" element={<Conatact></Conatact>}/>
<Route path="/r" element={<Readc></Readc>}/>
</Routes>


</BrowserRouter>
{/* <div>
  <Readc></Readc>
</div> */}
{/* <Calculator></Calculator> */}
    </div>
  ) 
 }