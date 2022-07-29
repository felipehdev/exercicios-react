import React from "react";
import {
  BrowserRouter as Router,
  
  Route,
  Link
} from "react-router-dom";

import './App.css'
import Contador from "./components/Pages/Contador/Contador";

function App() {

  return (
    <div className="App">
      <Router>
        <h1>OI</h1>
        <Contador/>

        
      
        
      </Router>
    </div>
    
  )
}

export default App
