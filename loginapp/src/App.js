import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login'

function App(props) {
  var key=props.key1;
  console.log(key)
  return (
    
    <div className="App">
      <Login key1={key}/>
    </div>
  );
}

export default App;
