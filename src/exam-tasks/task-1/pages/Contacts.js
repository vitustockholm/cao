import React from 'react';
import { Link } from 'react-router-dom';

const Contacts = () => {
  return (
    <div>
      <h1>contacts</h1>
      <Link to='/Aboutus'>About us</Link>
      <br />
      <Link to='/'>Back to main</Link>
    </div>
  );
};

export default Contacts;

//ilgai svarsciau kaip uzrenderint i task viena navigacija, maisiausi kad per app.js tik galesiu valdyti task1 komponento routeri. 10.44 laikas;DDD
