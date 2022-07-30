import React from "react";
import {
  BrowserRouter as Router,  
} from "react-router-dom";

import './App.css'
import Contador from "./components/Pages/Contador/Contador";
import PokeSaver from "./components/Pages/PokeSaver/PokeSaver";
import PrevisaoTempo from "./components/Pages/PrevisaoTempo/PrevisaoTempo";

function App() {

  return (
    <div className="App">
      <Router>
        <h1>OI</h1>
        <Contador/>
        <PrevisaoTempo/>

        <br />
        <br />
        <PokeSaver />

        
      
        
      </Router>
    </div>
    
  )
}

export default App
