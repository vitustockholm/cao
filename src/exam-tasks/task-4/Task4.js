import React from 'react';
import Users from './UserPage';
//added loading status stage

function Task4() {
  return (
    <div>
      <h3>Task 4</h3>
      <h5>Users: sliced 3 x + all task4 info</h5>

      <Users />
    </div>
  );
}

export default Task4;

/* Task 4
Atkurkite lentelę, kurioje bus randama ši informacija apie vartotoją:
- name;
- email;
- address (street + city pvz.: "Kulas Light, Gwenborough");
- phone;
- company (name).

Informaciją imkite iš čia: https://jsonplaceholder.typicode.com/users

Pastaba: naudokite useState, useEffect.
*/
