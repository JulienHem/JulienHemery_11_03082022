import Router from "./components/routes/routes";
import './App.scss';
import Header from "./components/header/header";
import React from "react";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
        <div className="App-content">
            <Header />
            <Router />
        </div>
        <Footer />
    </div>
  );
}

export default App;
