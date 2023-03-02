import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Company from './components/pages/Company';
import Home from './components/pages/Home';
import Contact from "./components/pages/Contact";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Projects from "./components/pages/Projects";
import Footer from "./components/layout/Footer"
import NewProject from "./components/pages/NewProject";
import Project from "./components/pages/Project";


function App() {
  return (
    <Router>
      <Navbar/>
        <Container customClass="min-height">
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route path='/projects' element={<Projects/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/company' element={<Company/>}></Route>
            <Route path='/newproject' element={<NewProject/>}></Route>
            <Route path='/project/:id' element={<Project/>}></Route>
          </Routes>
        </Container>
        <Footer/>
    </Router>
    
  );
}

export default App;
