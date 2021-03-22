import React, {createContext, useContext} from 'react';
import {FunctionComponent} from 'react';
import {useStaff} from './Staff';

import TrebleClefImg from '../img/treble-clef.svg';
import BassClefImg from '../img/bass-clef.svg';

export interface ClefProps {
  kind: 'treble' | 'bass';
  left?: number;
}

export const ClefContext = createContext({
  yPitch: (p: number) => p,
});

export const useClef = () => useContext(ClefContext);

export const Clef: FunctionComponent<ClefProps> = ({kind, children, left}) => {
  const {yNote, staffLeft, staffTop, staffHeight} = useStaff();

  if(left === undefined)
    left = staffLeft;

  let clefImage;
  let middleCPosition: number;
  switch(kind) {
    case 'treble':
      middleCPosition = -2;
      
      clefImage = <image 
        href={TrebleClefImg} 
        x={left} 
        y={staffTop - staffHeight * .40}
        height={staffHeight * 1.885}
      />
      break;

    case 'bass':
      middleCPosition = 10;
      clefImage = <image 
        href={BassClefImg} 
        x={left} 
        y={staffTop - staffHeight * .55}
        height={staffHeight * 2}
      />
      break;

    default:
      middleCPosition = 0;
      break;
  }

  const yPitch = (p: number) => yNote(middleCPosition + p - 60)


  return <ClefContext.Provider value={{
    yPitch,
  }}>
    {clefImage}
    {children}
  </ClefContext.Provider>
}

export default Clef;

export const TrebleClef: FunctionComponent = ({children}) => <Clef kind="treble">
  {children}
</Clef>

export const BassClef: FunctionComponent = ({children}) => <Clef kind="bass">
  {children}
</Clef>
