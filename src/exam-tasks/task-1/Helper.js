import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/Aboutus';
import Contact from './pages/Contacts';
import { Link } from 'react-router-dom';

const Helper = () => {
  return (
    <div>
      <h2>Task1 head for</h2>
      <Link to='/Aboutus'>About us</Link>
      <br />
      <Link to='/'>Back to main</Link>
    </div>
  );
};

export default Helper;
