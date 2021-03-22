import React, {useContext} from 'react';
import {FunctionComponent, createContext} from 'react';

export interface StaffProps {
  /**
   * y-position of the top line of the staff.
   */
  top: number;

  /**
   * y-position of the bottom line of the staff.
   */
  bottom: number;

  /**
   * left-most x-position where each line is drawn from.
   */
  left: number;

  /**
   * right-most x-position where each line is drawn to.
   */
  right: number;
}

export const StaffContext = createContext({
  staffTop: 0,
  staffBottom: 4,
  staffLeft: 0,
  staffRight: 0,
  spaceHeight: 1,
  staffHeight: 4,
  yLine: (n: number) => n,
  ySpace: (n: number) => n + 1/2,
  yNote: (n: number) => n/2,
})

export const useStaff = () => useContext(StaffContext);

export const Staff: FunctionComponent<StaffProps> = ({top, bottom, left, right, children}) => {

  let spaceHeight = (bottom - top) / 4;
  let staffHeight = 4 * spaceHeight;
  let yLine = (n: number) => bottom - n * spaceHeight;
  let ySpace = (n: number) => yLine(n) + spaceHeight / 2;
  let yNote = (n: number) => yLine(n/2);

  return <g>
    <g>
      <line x1={left} x2={right} y1={yLine(0)} y2={yLine(0)} />,
      <line x1={left} x2={right} y1={yLine(1)} y2={yLine(1)} />,
      <line x1={left} x2={right} y1={yLine(2)} y2={yLine(2)} />,
      <line x1={left} x2={right} y1={yLine(3)} y2={yLine(3)} />,
      <line x1={left} x2={right} y1={yLine(4)} y2={yLine(4)} />,
    </g>
    <StaffContext.Provider value={{
      staffTop: top,
      staffBottom: bottom,
      staffLeft: left,
      staffRight: right,
      staffHeight,
      spaceHeight,
      yLine, 
      ySpace,
      yNote,
    }}>
      {children}
    </StaffContext.Provider>
  </g>
};

export default Staff;
