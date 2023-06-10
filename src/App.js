import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact"
import About from "./components/About"
import Service from "./components/Service"
import Home from "./components/Home"
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/service" exact Component={Service} />
            <Route path="/about" exact Component={About} />
            <Route path="/contact" exact Component={Contact} />


          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  )
}
export default App
