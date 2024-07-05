import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('http://localhost:3001/api/users');
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="user-list-container">
      <h1>User List</h1>
      {users.length === 0 ? (
        <p>No users available</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {(() => {
              const rows = [];
              for (let i = 0; i < users.length; i++) {
                const user = users[i];
                rows.push(
                  <tr key={user._id}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                  </tr>
                );
              }
              return rows;
            })()}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;
