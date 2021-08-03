import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Viewer from './components/Viewer';
import Dock from './components/Dock';

function App() {
  return (
    <div className="App">
      <Viewer />
      <Dock />
    </div>
  );
}

export default App;
