import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./Components/footer";
import Header from "./Components/header";
import Registration from "./Components/registration";
import Query from "./Components/query";
import Content from "./Components/contentp";
import Event from "./Components/Event";
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
            <Route path="/contacts" element ={<Footer />}/>
            <Route path="/Event" element ={<Event />}/>
        </Routes>
         <Footer /> 
        {/* <Query /> */}
      </BrowserRouter>
    </div>
  );
}
export default App;
