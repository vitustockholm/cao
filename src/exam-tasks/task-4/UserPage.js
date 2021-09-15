import React, { useState, useEffect } from 'react';

import Users from './Users';

const UsersPage = () => {
  // Hooks
  // -- state
  // -- local
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // --- side effects
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? <div>Loading ...</div> : <Users users={users} />;
};

export default UsersPage;
