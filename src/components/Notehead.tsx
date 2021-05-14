import {FunctionComponent} from 'react';

import {useStaff} from './Staff';

export interface NoteheadProps {
  y: number;
  x: number;
  kind?: NoteheadKind,
}

export type NoteheadKind = 'circle'|'square'|'x';

export const stemAnchors = {
  square: {
    up: [.5, -.5],
    down: [-.5, .5],
  },
  circle: {
    up: [.5, 0],
    down: [-.5, 0],
  },
  x: {
    up: [.5, -.5],
    down: [-.5, .5],
  }
}


export const Notehead: FunctionComponent<NoteheadProps> = ({x,y, kind="circle"}) => {
  const {noteheadHeight: height, noteheadWidth: width} = useStaff();


  if(kind == 'square')
    return <rect x={x-width/2} y={y-height/2} width={width} height={height} />

  else if(kind == 'circle')
    return <circle cx={x} cy={y} r={height/2} />

  else if(kind == 'x')
    return <g>
      <line x1={x - width/2} y1={y-height/2} x2={x+width/2} y2={y+width/2} />
      <line x1={x + width/2} y1={y-height/2} x2={x-width/2} y2={y+width/2} />
    </g>

  else
    throw "Unknown kind";
}
