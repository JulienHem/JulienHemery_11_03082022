import React from 'react';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import {Home} from "./pages/home/home";
import {Faq} from "./pages/faq/faq";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/faq" element={<Faq />}/>
        </Routes>
    </div>
  );
}

export default App;
