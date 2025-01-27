import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';


const Dashboard = () => {
  const cranes = [
    { id: 1, name: 'Crane(CR.1)', status: 'grey' },
    { id: 2, name: 'Crane(CR.2)', status: 'green' },
    { id: 3, name: 'Crane(CR.3)', status: 'red' },
    { id: 4, name: 'Crane(CR.4)', status: 'green' },
  ];

  const navigate = useNavigate();

  const handleClick = (crane) => {
    if (crane.id === 3) {
      navigate('/crane-details'); // Navigate to the CraneDetails page
    } else {
      alert(`You clicked on ${crane.name}`);
    }
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="crane-container">
        {cranes.map((crane) => (
          <button
            key={crane.id}
            className="crane-card"
            onClick={() => handleClick(crane)}
          >
            <span className={`status-dot ${crane.status}`}></span>
            {crane.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
