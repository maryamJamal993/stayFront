import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import { useState } from 'react';
import HostASpace from './components/HostASpace';
import SignUp from './components/SignUp';
import SignUpFirst from './components/SignUpFirst';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {

  return (
    <div className="container-fluid">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Cards/>} />
          <Route path="/signup" element={<SignUpFirst/>} />
          <Route path="/signin" element={<SignUp/>} />
          <Route path="/hostaspace" element={<HostASpace/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
