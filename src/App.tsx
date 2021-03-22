import React from 'react';
import logo from './logo.svg';
import './App.css';
import Staff from './components/Staff';
import {BassClef} from './components/Clef'

function App() {
  return (
    <svg stroke="black" height="500px" width="500px">
      <Staff top={100} left={25} bottom={200} right={475}>
        <BassClef />
      </Staff>
    </svg>
  );
}

export default App;
