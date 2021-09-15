// V1
import React, { useRef } from 'react';

const Button = (props) => {
  const button = useRef(0);
  const button2 = useRef(1);

  const onClick = () => {
    button.current.style.backgroundColor = '#f1f1f1';
    button.current.style.color = '#0000';
  };
  const onClick2 = () => {
    button2.current.style.backgroundColor = '#0000';
    button2.current.style.color = '#f1f1f1';
  };

  return (
    <div>
      <button
        onClick={onClick}
        ref={button}
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'red',
        }}
      >
        LIGHT THEME
      </button>
      <button
        onClick={onClick2}
        ref={button2}
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'red',
        }}
      >
        DARK THEME
      </button>
    </div>
  );
};

export default Button;

//V2
// import React, { useRef } from 'react';

// const Button = ({ children }) => {
//   const pRef = useRef(0);
//   return (
//     <button
//       ref={pRef}
//       onClick={() => (pRef.current.backgrounColor = '#f1f1f1')}
//     >
//       Button name
//     </button>
//   );
// };

// export default Button;
