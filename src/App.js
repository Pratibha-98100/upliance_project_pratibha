import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Component/Login";
import Register from "./Component/Register/index"
import Home from "./Component/Pages/Home";

function App() {
  
  return (


    <>

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Register/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
        </BrowserRouter> 
      </>
  );

}

export default App;
