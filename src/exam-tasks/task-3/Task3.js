import React from 'react';
import Button from './Buttons/Button';

function Task3() {
  return (
    <div>
      <h3>Task 3</h3>

      <h3>Happening Now</h3>
      <h5>Join Twitter today</h5>
      <Button text='Sign up' />
      <Button text='Log In' />
    </div>
  );
}

export default Task3;

/* Task 3
Atkurkite šį komponentą: https://prnt.sc/12978k7

Pastabos:
- turi būti sukurtas papildomas <Button> komponentas, kuris prims
du props: tekstas ir klasė. Remiantis jais bus atvaizduojamas
komponente nurodyti mygtukai;
- šriftas: naudokite savo parinktą;
- twitter logo, naudokite ikon'ą.
*/
// .stylasA1 {
//   font-family: sans-serif;
// }

// .stylasA2 {
//   font-family: monospace;
// }

// function App() {
//   return (
//     <div className='App'>
//       <Button text='click me' />
//     </div>
//   );
// }
