import './App.css';
import{Navbar, Footer, Home, BoardMembers, SocialMedia, TEMP3} from "./Navigate";
import {Route, Routes} from "react-router-dom";
import {useState, useEffect, react} from "react";


function App() {
  return (
  <div> 
    <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route exact path="/Home" element={<Home/> }/>
        <Route path="/Board" element={<BoardMembers />}/>
        <Route path="/Social" element={ <SocialMedia />}/>
        <Route path="/TEMP3" element={ <TEMP3 />}/>
      </Routes>
    </div>

    {Footer()}
    </>
  </div>
  );
}

export default App;
