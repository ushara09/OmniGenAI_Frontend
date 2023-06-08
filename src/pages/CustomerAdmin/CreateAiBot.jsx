import React, { useState } from 'react';
import './CreateAiBot.css';

const App = () => {
  const [name, setName] = useState('');
  const [userRole, setUserRole] = useState('');
  const [selectedPrompt, setSelectedPrompt] = useState('');
  const [assignedRoles, setAssignedRoles] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUserRoleChange = (e) => {
    setUserRole(e.target.value);
  };

  const handlePromptChange = (e) => {
    setSelectedPrompt(e.target.value);
  };

  const handleAssignUserRole = () => {
    if (name && userRole) {
      const assignedRole = {
        name,
        userRole
      };
      setAssignedRoles([...assignedRoles, assignedRole]);
      setName('');
      setUserRole('');
    }
  };

  const handleDeleteRole = (index) => {
    const updatedRoles = assignedRoles.filter((_, i) => i !== index);
    setAssignedRoles(updatedRoles);
  };

  return (
    <div className="container">
      <h2>Enter a name for the AI bot</h2>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter name"
      />

      <div className="search-container">
        <input
          type="text"
          value={userRole}
          onChange={handleUserRoleChange}
          placeholder="Search user roles"
        />
        <button onClick={handleAssignUserRole}>Assign User Role</button>
      </div>

      <div className="dropdown-container">
        <h2>Select Prompts</h2>
        <select value={selectedPrompt} onChange={handlePromptChange}>
          <option value="">-- Select Prompt --</option>
          <option value="Prompt 1">Prompt 1</option>
          <option value="Prompt 2">Prompt 2</option>
          <option value="Prompt 3">Prompt 3</option>
        </select>
      </div>

      <div className="prompt-container">
        <h2>-- Assigned Roles --</h2>
        {assignedRoles.map((role, index) => (
          <div key={index} className="assigned-role">
            <p>{role.name}</p>
            <p>{role.userRole}</p>
            <button onClick={() => handleDeleteRole(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
