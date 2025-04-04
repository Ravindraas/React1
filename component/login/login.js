import axios from 'axios';
import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

 export default function login() {
//   const nagivate = useNavigate;
//   const [Username, updateusername] = useState("");
//   const [password, updatepassword] = useState("");

  function changeusername(){
    console.log("working");
    updateusername(event.target.value);
  }
  function changepassword(){
    console.log("workingpassword");
    updatepassword(event.target.value);
  }
  function handlelogin(){
    console.log(Username,password);
    if(Username === "hemanth" && password === 123123){
      nagivate("/JioFiber");
    }else if(Username === "ravindra" && password === 987987){
      nagivate(".Home");
    }
    else{
      alert("username not found");
    }
  }

  // async function sendloginformdata(params) {
  //   const url :  await axios.post("https://fakestoreapi.com/products", {
  //     email : "ravindra@gmail.com",
  //     password = 12432,
  //   });
  //   console.log(url.data);
  //   senddata(urldata);
    
  // }
  return (
    // <div> - div takes extra space
    //   login
    // </div>
    <>
    {/* to print on screen */}
    {Username} 
    {password}
     <div>login</div>
     <label>Username</label>
     <input type = 'text' onChange = {changeusername}/>
     <label>password</label>
     <input type = "password" onChange = {changepassword}/>
     <button onClick={handlelogin}>login</button>
    </>
  )
}
