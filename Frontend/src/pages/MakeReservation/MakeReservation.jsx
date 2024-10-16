import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { StoreContext } from '../../context/StoreContext';
import './MakeReservation.css';

const MakeReservation = () => {
  const { url, token } = useContext(StoreContext);
  const navigate = useNavigate();
  const [reservation, setReservation] = useState({
    date: '',
    time: '',
    guests: 1,
    specialRequests: ''
  });

  const handleChange = (e) => {
    setReservation({ ...reservation, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/api/reservation/create`, reservation, {
        headers: { token }
      });
      if (response.data.success) {
        alert('Reservation created successfully!');
        navigate('/view-reservations');
      }
    } catch (error) {
      alert('Error creating reservation. Please try again.');
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="make-reservation">
      <h2>Make a Reservation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            min={today}
            required
            value={reservation.date}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            min="11:00"
            max="20:00"
            required
            value={reservation.time}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="guests">Number of Guests:</label>
          <input
            type="number"
            id="guests"
            name="guests"
            min="1"
            required
            value={reservation.guests}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="specialRequests">Special Requests:</label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            value={reservation.specialRequests}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Make Reservation</button>
      </form>
    </div>
  );
};

export default MakeReservation;