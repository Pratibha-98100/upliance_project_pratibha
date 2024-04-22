import React, { useEffect, useState } from 'react';

function ListOfUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData')) || [];
    setUsers(storedData);
  }, []);


  return (
    <div>
      <h2 style={{ paddingLeft:"12%"}}>All Users</h2>
      {users.map((user) => (
        <div key={user.id}>
          <p style={{ paddingLeft:"6%"}}>ID : {user.id} &nbsp;   <span>Name : {user.name}</span></p>
        </div>
        
      ))}
    </div>
  );
}

export default ListOfUser;
