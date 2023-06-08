import React, { useState } from 'react';
import './CreateUserRole.css';

function App() {
    const [userRole, setUserRole] = useState('');
    const [userRoles, setUserRoles] = useState([]);
  
    const handleInputChange = (e) => {
      setUserRole(e.target.value);
    };
  
    const handleCreateRole = () => {
      if (userRole.trim() !== '') {
        setUserRoles([...userRoles, userRole]);
        setUserRole('');
      }
    };
  
    const handleDeleteRole = (role) => {
      setUserRoles(userRoles.filter((r) => r !== role));
    };
  
    return (
      <div className="container">
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter a name for the user role"
            value={userRole}
            onChange={handleInputChange}
          />
          <button onClick={handleCreateRole}>Create Role</button>
        </div>
  
        <div className="user-roles">
          <h3>Available User Roles</h3>
          <div className="role-container">
            {userRoles.length === 0 ? (
              <p>No user roles available.</p>
            ) : (
              userRoles.map((role, index) => (
                <div className="role-box" key={index}>
                  <div className="role">
                    <span>{role}</span>
                    <div className="buttons">
                      <button>Edit</button>
                      <button onClick={() => handleDeleteRole(role)}>Delete</button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
  
  export default App;
