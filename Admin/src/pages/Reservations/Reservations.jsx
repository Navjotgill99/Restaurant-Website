import React, { useState, useEffect } from 'react'
import './Reservations.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const Reservations = ({ url }) => {
  const [reservations, setReservations] = useState([])

  const fetchReservations = async () => {
    try {
      const response = await axios.get(`${url}/api/reservation/list`)
      if (response.data.success) {
        setReservations(response.data.data)
        console.log(response.data.data);
        
      } else {
        toast.error("Error fetching reservations")
      }
    } catch (error) {
      console.error("Error fetching reservations:", error)
      toast.error("Error fetching reservations")
    }
  }

  const updateReservationStatus = async (reservationId, newStatus) => {
    try {
      const response = await axios.post(`${url}/api/reservation/update-status`, {
        reservationId,
        status: newStatus
      })
      if (response.data.success) {
        toast.success("Reservation status updated")
        fetchReservations()
      } else {
        toast.error("Error updating reservation status")
      }
    } catch (error) {
      console.error("Error updating reservation status:", error)
      toast.error("Error updating reservation status")
    }
  }

  useEffect(() => {
    fetchReservations()
  }, [])

  return (
    <div className='reservations add'>
      <h3>Reservations</h3>
      <div className="reservations-list">
        {reservations.map((reservation, index) => (
          <div key={index} className="reservation-item">
            <p>Date: {new Date(reservation.date).toLocaleDateString()}</p>
            <p>Time: {reservation.time}</p>
            <p>Guests: {reservation.guests}</p>
            <p>Special Requests: {reservation.specialRequests || 'None'}</p>
            <p>Status: {reservation.status}</p>
            <select 
              value={reservation.status} 
              onChange={(e) => updateReservationStatus(reservation._id, e.target.value)}
            >
              <option value="Pending">Pending</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Cancelled">Cancelled</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reservations