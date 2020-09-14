import React from 'react';
import './App.css';
import Header from "./Header";
import "./Header.css";
import Sidebar from "./Sidebar";


function App() {
  return (
    <div className="app">
      <h1>Hello celestial beings </h1>

      <Header/>
        <div className="app__body">
          <Sidebar/>
        {/*react-router*/}  
        </div>
    </div>
  );
}

export default App;
