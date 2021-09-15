import React from 'react';
//blogai uzduoti isiskaiciau
import Button from './Button';

//2v
// toki reikejo pasidaryt is karto
// const Button = ({text, className, action}) => {
//   return (
//     <button className={className} onClick={action}>{text}</button>
//   )
// }
////////////////////////////
// import React from 'react';

// const FuncButton = ({ text }) => {
//   return <button>{text} Funcbutton</button>;
// };

// export default FuncButton;
//

function Task5() {
  return (
    <div>
      <h3>Task 5</h3>
      <p>P tag</p>

      <Button />
    </div>
  );
}

export default Task5;


/* Task 5
Task 7 komponento viduje sukurkite h1 ir p žymas su tekstu ir du mygtukus.

Vienas mygtukas vadinsis "Light theme", kurį paspaudus Task7 komponento fonas
taps šios spalvos #f1f1f1, o tekstas #0000.
Kitas mygtukas vadinsis "Dark theme", kurį paspaudus Task7 komponento fonas
taps šios spalvos #000000, o tekstas #f1f1f1.

Pastabos:
- mygtukai turi būti atvaizduojami komponento viduje, jiems atskirų komponentų
kurti nereikia;
- panaudokite useRef.
*/
