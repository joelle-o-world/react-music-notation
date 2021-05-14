import React, {FunctionComponent} from 'react';
import {useClef} from './Clef';
import {Notehead, NoteheadKind, stemAnchors} from './Notehead';
import {useStaff} from './Staff';

export interface StandaloneNoteProps {
  x: number;
  pitch: number;
  noteheadKind?: NoteheadKind;
  /** Height of the stem (in spaces) */
  stemHeight?: number;
  stemDirection?: 'up' | 'down' | 'auto';
}

export const StandaloneNote: FunctionComponent<StandaloneNoteProps> = ({
  x,
  pitch,
  noteheadKind='circle',
  stemDirection="auto",
  stemHeight=3.5,
}) => {
  const {yPitch} = useClef();
  const staff = useStaff()

  const y = yPitch(pitch)

  if(stemDirection === 'auto')
    stemDirection = y > staff.yCenter ? 'up' : 'down'

  const anchors = stemAnchors[noteheadKind][stemDirection];
  const xAnchor = anchors[0] * staff.noteheadWidth + x;
  const yAnchor = anchors[1] * staff.noteheadHeight + y;
  const xEnd = xAnchor;
  const yEnd = stemDirection === 'up'
    ? yAnchor - stemHeight * staff.spaceHeight
    : yAnchor + stemHeight * staff.spaceHeight


  return <g>
    <line x1={xAnchor} y1={yAnchor} x2={xEnd} y2={yEnd} stroke="black" />
    <Notehead x={x} y={y}></Notehead>
  </g>
}
