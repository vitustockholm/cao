import React from 'react';

const Button = ({ text, classe }) => {
  return <button onClick={classe}>{text}</button>;
};

export default Button;
