import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Reservations.css';

const Reservations = () => {
  const navigate = useNavigate();

  return (
    <div className='reservations' id='reservations'>
      <h2>Reservations</h2>
      <div className="reservations-buttons">
        <button onClick={() => navigate('/make-reservation')}>Make a Reservation</button>
        <button onClick={() => navigate('/view-reservations')}>View Reservations</button>
      </div>
    </div>
  );
};

export default Reservations;