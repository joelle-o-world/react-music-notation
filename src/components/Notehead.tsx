import {FunctionComponent} from 'react';

import {useStaff} from './Staff';

export interface NoteheadProps {
  y: number;
  x: number;
  kind: 'square'|'circle'|'x';
}

export const Notehead: FunctionComponent<NoteheadProps> = ({x,y, kind}) => {
  const {spaceHeight} = useStaff();

  const height = spaceHeight * .9;
  const width = height

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
