import React from 'react';
import logo from './logo.svg';
import './App.css';
import Staff from './components/Staff';
import {BassClef} from './components/Clef'
import {Notehead} from './components/Notehead';

function App() {
  return (
    <svg stroke="black" height="500px" width="500px">
      <Staff top={100} left={25} bottom={200} right={475}>
        <BassClef />
        <Notehead x={200} y={100} kind="square" />
        <Notehead x={250} y={100} kind="circle" />
        <Notehead x={300} y={100} kind="x" />
      </Staff>
    </svg>
  );
}

export default App;
