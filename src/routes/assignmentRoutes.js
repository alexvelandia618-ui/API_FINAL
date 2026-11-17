// CAPA ROUTES: solo asocia cada endpoint con su controlador.
import { Router } from "express";
import { createAssignment, getAllAssignments, getByIdAssignment, updateAssignment, deleteAssignment } from "../controllers/assignmentController.js";

const router = Router();

router.post("/", createAssignment);
router.get("/", getAllAssignments);
router.get("/:id", getByIdAssignment);
router.put("/:id", updateAssignment);
router.delete("/:id", deleteAssignment);

export default router;
