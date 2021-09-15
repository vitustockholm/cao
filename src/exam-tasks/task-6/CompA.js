import React from 'react';
import CompA1 from './CompA1';

function CompA() {
  return (
    <div>
      <h4>CompA</h4>
      <CompA1 />
    </div>
  );
}

export default CompA;

//import React, { useState, useContext } from 'react';
// import { ClicksContext } from '../App';

// const CompA = () => {
//   // Hooks
//   // -- state
//   // ---- global
//   const clicksContext = useContext(ClicksContext);
//   const { dispatch } = clicksContext;
//   // ---- local
//   const [buttonClicks, setButtonClicks] = useState(0);

//   // Custom funtions
//   const clickHandler = () => {
//     // changing global state
//     dispatch({ type: 'INCREMENT' });
//     // changing local state
//     setButtonClicks(buttonClicks + 1);
//   };
//   return (
//     <>
//       <h2>Component A</h2>
//       <button onClick={clickHandler}>Clicked: {buttonClicks}</button>
//     </>
//   );
// };

// export default CompA;
