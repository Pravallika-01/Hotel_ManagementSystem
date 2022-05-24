
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import {Footer,Header,Registration,Content} from "./components";
import IMAGES from "./Assets/img";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  return (
    //<Section/>
    <div className="Learning">
      <BrowserRouter>
        <Header />
        
        <Routes>
            <Route path="/" element ={<Content />}/>
            <Route path="/registration" element ={<Registration />}/>
            {/* <Route path="/contacts" element ={<Footer />}/> */}
        </Routes>
         <Footer /> 
        {/* <Query /> */}
      </BrowserRouter>
    </div>
  )}
export default App;

