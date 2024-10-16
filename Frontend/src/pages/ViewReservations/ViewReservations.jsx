import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { StoreContext } from '../../context/StoreContext';
import './ViewReservations.css';

const ViewReservations = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchReservations = async () => {
      const response = await axios.get(`${url}/api/reservation/user`,{headers:{token}});
      setData(response.data.data);
  }

  useEffect(() => {
    if (token) {
      fetchReservations();
    }
  },[token])

  return (
    <div className="view-reservations">
      <h2>Your Reservations</h2>
      {data.length === 0 ? (
        <p>You have no reservations.</p>
      ) : (
        <ul>
          {data.map((reservation) => (
            <li key={reservation._id}>
              <p>Date: {new Date(reservation.date).toLocaleDateString()}</p>
              <p>Time: {reservation.time}</p>
              <p>Guests: {reservation.guests}</p>
              <p>Status: {reservation.date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewReservations;