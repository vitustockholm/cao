import React from 'react';
import { Link } from 'react-router-dom';

const Aboutus = () => {
  return (
    <div>
      <h1>About us</h1>
      <Link to='/Contacts'>contacts</Link>
      <br />
      <Link to='/'>Back to main</Link>
    </div>
  );
};

export default Aboutus;
