import express from "express";
import { addPlant, getPlants } from "../controllers/plantController.js";

const router = express.Router();

router.post("/", addPlant);
router.get("/", getPlants);

export default router;
