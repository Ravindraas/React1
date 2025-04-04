import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import True5G from './component/True5G/True5G';
import JioFiber from './component/JioFiber/JioFiber';
import login from './component/login/login';
import click from './component/click/click';
function App() {
  function Airtel(){
    return(
      <> this is Airtel</>
    );
  }
  function ravindra(){
    return(
      <> this is ravindra</>
    );
  }
  
  return (
    <h3>
   
    <Router>
      <Header/>
      <JioFiber/>
      <login/>
        <Routes>
          {/* <Route path ="/" element = {<login/>}></Route> */}
            <Route path ="/" element = {<Home/>}></Route>
            <Route path = "/" element = {<True5G/>}></Route>
            <Route path ="Airtel" element = {<Airtel/>} > </Route>
            <Route path ="ravindra" element = {<ravindra/>} > </Route>
            <Route path= "/" element = {<click/>} > </Route>
        </Routes>
    </Router>
    </h3>
  );
}


export default App;
