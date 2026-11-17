// CAPA ROUTES: solo asocia cada endpoint con su controlador.
import { Router } from "express";
import { createPilot, getAllPilots, getByIdPilot, updatePilot, deletePilot } from "../controllers/pilotController.js";

const router = Router();

router.post("/", createPilot);
router.get("/", getAllPilots);
router.get("/:id", getByIdPilot);
router.put("/:id", updatePilot);
router.delete("/:id", deletePilot);

export default router;
