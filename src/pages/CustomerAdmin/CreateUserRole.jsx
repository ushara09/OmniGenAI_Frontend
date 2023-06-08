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
        <div className="input-container" style={{
											width: "100%",
											height: "100%",
											borderRadius: "10px",
										}}>
          <input style={{
												height: "100%",
												width: "100%",
												backgroundColor: "#D9D9D9",
												padding: "24px",
												fontWeight: 500,
												fontSize: "20px",
												outline: "none",
												border: "none",
												borderRadius: "10px",
												textTransform: "uppercase",
											}}
            type="text"
            placeholder="Enter a name for the user role"
            value={userRole}
            onChange={handleInputChange}
          />
          <div ><button width="100%"  onClick={handleCreateRole} className='btn-primary'>Create Role</button>
        </div>
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
