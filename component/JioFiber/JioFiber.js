//import React from 'react'
import React, { useState } from "react";

export default function JioFiber() {
    // usestate - to update the data 
    const[Username, updateUsername] = useState('shiva');
    const[password, updatePassword] = useState(1234567);

    function gettypedvalue(event){
        console.log("print username", event.target.value);
        updateUsername(event.target.value);
    }
    function getpassword(event){
        console.log("printpassword",event.target.value);
        updatePassword(event.target.value);
    }
    function handleClick(){
        return(
          <div>
          <button>Click Me</button>
        </div>
        );
      }

  return (
    <div> hi this is JioFiber
      {Username}
      {password}
      <label>Username</label>
      <input type = "text" className="username -mt-3" onChange = {gettypedvalue}/>
      <label>Password</label>
      <input type = "Password" className = "password mt-3" onChange = {getpassword}/>
      {/*if you want to see password put "text" */}
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}
