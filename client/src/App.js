import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

//function App() {
//  const [data, setData] = useState(null);
//
//  useEffect(() => {
//    fetch("/api")
//      .then((res) => res.json())
//      .then((data) => setData(data.msg));
//  }, []);
//
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>{data}</p>
//      </header>
//    </div>
//  );
//}
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}