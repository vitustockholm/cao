import React from 'react';
import CompA from './CompA';
import CompB from './CompB';

//nesuspejau nors galejau nuo sitos pradeti

function Task6() {
  return (
    <div>
      <h3>Task 6</h3>
      <CompA />
      <CompB />
    </div>
  );
}

export default Task6;

/* Task 6
task-8 aplanke rasite kelis komponetus. Task8 komponente, turi būti atvaizduojami
šie kompoentai: CompA (viduje turi <h2>CompA</h2> ir CompA1 (su tekstu <h3>CompA1</h3>)) 
ir CompB (viduje turi <h2>CompB</h2>).

Task8 komponentų medis
- CompA
-- CompA1
- CompB

Task8 viduje bus sukurtas Counter state'as, kuri bus galima valdyti iš CompA1 ir CompB
State'as bus valdomas su mygtkais, kurie leis state'ą padidinti 10 taškų arba pamažinti 10.
State'ui pasiekus 100, bus draudžiama didinti state'ą ir pasirodys pranešimas "Didinti nebegalima"

Pastaba: naudokite useState, useContext (Context API).

*/

// //// import Counter from './components/Counter';
// import React, { useReducer } from 'react';

// // Components
// import CompA from './components/CompA';
// import CompB from './components/CompB';
// import CompC from './components/CompC';

// // Context (for managing global state)
// export const ClicksContext = React.createContext();

// // useReducer inital state
// const initialClickState = { clicks: 0 };
// // useReducer reducer funtion to manage initialClickState
// const clickReducer = (state, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { clicks: state.clicks + 1 };
//     default:
//       return state;
//   }
// };

// function App() {
//   const [state, dispatch] = useReducer(clickReducer, initialClickState);

//   return (
//     <div className='App'>
//       {/* <Counter /> */}
//       <ClicksContext.Provider value={{ dispatch }}>
//         <h1>
//           Buttons cliked <u>{state.clicks}</u> times in total
//         </h1>

//         <CompA />
//         <CompB />
//         <CompC />
//       </ClicksContext.Provider>
//     </div>
//   );
// }

// export default App;

//counterjs

// import React, { useReducer } from 'react';

// // useReducer initialState
// let initialState = { count: 0, message: '' };
// // useReducer reducer funtion (describes how state should change)
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       if (state.count < 10) return { ...state, count: state.count + 1 };
//       return { ...state, message: 'Reached max: 10' };
//     case 'DECREMENT':
//       if (state.count === 10) return { count: state.count - 1, message: '' };
//       return { ...state, count: state.count - 1 };
//     default:
//       return state;
//   }
// };

// const Counter = () => {
//   // Hooks
//   // -- state
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <h3>Count: {state.count}</h3>
//       <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
//       <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
//       <p>{state.message}</p>
//     </div>
//   );
// };

// export default Counter;
