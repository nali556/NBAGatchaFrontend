import React ,{ Fragment, useState, useEffect} from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Store from "./components/Store";
import Signup from "./components/Signup"
import Mycollection from "./components/Mycollection";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (


    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/"element={<Home></Home>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/store" element={<Store/>}/>
         <Route path="/Signup" element={<Signup/>}/>
         <Route path="/Mycollection" element={<Mycollection/>}/>
      </Routes>
    </BrowserRouter>

   
  );
}

export default App;