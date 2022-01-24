import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Store from "./components/Store";
import Signup from "./components/Signup";

function App() {
  return (

   
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/"element={<Home></Home>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/store" element={<Store/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>




  );
}

export default App;