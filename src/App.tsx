import Router from "./components/routes/routes";
import './App.scss';
import Header from "./components/header/header";
import React from "react";

function App() {
  return (
    <div className="App">
        <Header />

        <Router />
    </div>
  );
}

export default App;
