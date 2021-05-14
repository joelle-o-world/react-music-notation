import React from 'react';
import Staff from './components/Staff';
import {BassClef} from './components/Clef'
import {Notehead} from './components/Notehead';

import './App.css';
import {StandaloneNote} from './components/StandaloneNote';

function App() {
  return (
    <div>
      <svg stroke="black" height="300px" width="500px">
        <Staff top={100} left={25} bottom={200} right={475}>
          <BassClef>
            <StandaloneNote x={350} pitch={54}/>
          </BassClef>
          <Notehead x={200} y={100} kind="square" />
          <Notehead x={250} y={100} kind="circle" />
          <Notehead x={300} y={100} kind="x" />
        </Staff>
      </svg>
      <article className="readme">
        <h1>react-music-notation</h1>
        <p>I can already tell that this is a project I will never finish. Music notation is complicated, and advanced typesetting is certainly not something I have special expertise in. That said, I would certainly use something like this myself. </p>

        <h2>Problems / Challenges</h2>
        <p><b>Allocating space on the x-axis</b> is the big question mark in my head at the moment. Some kind of clever <code>{"<TimeAxis/>"}</code> component with a context provider could be a solution? Objects could call a function (provided by the context), something like <code>timeCtx.allocateSpace(time, width)</code></p>
      </article>
    </div>
  );
}

export default App;
