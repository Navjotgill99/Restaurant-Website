import reservationModel from "../models/reservationModel.js";
 
// Create a new reservation
const createReservation = async (req, res) => {
    try {
        const newReservation = new reservationModel({
            userId: req.body.userId,
            date: req.body.date,
            time: req.body.time,
            guests: req.body.guests,
            specialRequests: req.body.specialRequests,
            phone: req.body.phone,
            name: req.body.name
        });
        await newReservation.save();
        res.json({ success: true, message: "Reservation created successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error creating reservation" });
    }
};

// Get user's reservations
const getUserReservations = async (req, res) => {
    try {
        const reservations = await reservationModel.find({ userId: req.body.userId });
        res.json({ success: true, data: reservations });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error fetching reservations" });
    }
};

// Update reservation status (for admin)
const updateReservationStatus = async (req, res) => {
    try {
        const updatedReservation = await reservationModel.findByIdAndUpdate(req.body.reservationId, { status: req.body.status }, {new: true});
        if (updatedReservation) {
            
            res.json({ success: true, message: "Reservation status updated" });
        } else {
            res.json({ success: false, message: "Reservation not found" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error updating reservation status" });
    }
};

// List all reservations (for admin)
const listAllReservations = async (req, res) => {
    try {
        const reservations = await reservationModel.find({});
        res.json({ success: true, data: reservations });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error fetching reservations" });
    }
};

export { createReservation, getUserReservations, updateReservationStatus, listAllReservations };
