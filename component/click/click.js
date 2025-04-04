import React from 'react'

export default function click() {
    function typeusername(event){
        console.log("username", event.target.value);
        typeusername();
    }
    function typepassword(event){
        console.log("password", event.target.value);
        typepassword();
    }
    function clickbutton(){
        console.log("button clicked");
        <button>ClickHere</button>
    }
  return (
    <div>
     <label>Enter Usename</label> 
     <input type = "text" onChange={typeusername}></input>
     <label>Enter Password</label>
     <input type= "password" onClick={typepassword}></input>
     <button onClick={clickbutton}>ClickHere</button>
    </div>
  )
}
