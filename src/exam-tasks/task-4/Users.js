import React from 'react';

const Users = ({ users }) => {
  return users.slice(0, 3).map((user) => (
    <h6 key={user.id}>
      {user.name} | {user.email} |{' '}
      {user.address.street + ' , ' + user.address.city} | {user.phone} |{' '}
      {user.company.name}
    </h6>
  ));
};
export default Users;
