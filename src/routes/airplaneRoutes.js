// CAPA ROUTES: solo asocia cada endpoint con su controlador.
import { Router } from "express";
import { createAirplane, getAllAirplanes, getByIdAirplane, updateAirplane, deleteAirplane } from "../controllers/airplaneController.js";

const router = Router();

router.post("/", createAirplane);
router.get("/", getAllAirplanes);
router.get("/:id", getByIdAirplane);
router.put("/:id", updateAirplane);
router.delete("/:id", deleteAirplane);

export default router;
