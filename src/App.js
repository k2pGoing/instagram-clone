import React from 'react';
import './App.css';
import logo from './images/instagram-logo.png'
import Post from "./Post";

function App() {
  return (
    <div className="app">
        <div className="app__header">
            <img src={logo} alt="" className="app__headerImage"/>
        </div>

        <h1>Hello world</h1>

        <Post/>

        {/*Posts*/}
        {/*Posts*/}
    </div>
  );
}

export default App;
