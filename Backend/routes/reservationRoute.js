import express from "express";
import authMiddleware from "../middleware/auth.js";
import { createReservation, getUserReservations, updateReservationStatus, listAllReservations } from "../controllers/reservationController.js";

const reservationRouter = express.Router();

reservationRouter.post("/create", authMiddleware, createReservation);
reservationRouter.get("/user", authMiddleware, getUserReservations);
reservationRouter.post("/update-status", updateReservationStatus);
reservationRouter.get("/list", listAllReservations);

export default reservationRouter;