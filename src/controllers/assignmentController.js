// CAPA CONTROLLERS: lee req, llama al servicio y responde con el código HTTP.
import * as service from "../services/assignmentService.js";

const estado = (error) => error.status || 400;

export const createAssignment = async (req, res) => {
  try {
    const nuevo = await service.registerAssignment(req.body);
    return res.status(201).json(nuevo);
  } catch (error) {
    return res.status(estado(error)).json({ error: error.message });
  }
};

export const getAllAssignments = async (req, res) => {
  try {
    return res.status(200).json(await service.listAssignments());
  } catch (error) {
    return res.status(estado(error)).json({ error: error.message });
  }
};

export const getByIdAssignment = async (req, res) => {
  try {
    return res.status(200).json(await service.getAssignment(req.params.id));
  } catch (error) {
    return res.status(estado(error)).json({ error: error.message });
  }
};

export const updateAssignment = async (req, res) => {
  try {
    return res.status(200).json(await service.updateAssignment(req.params.id, req.body));
  } catch (error) {
    return res.status(estado(error)).json({ error: error.message });
  }
};

export const deleteAssignment = async (req, res) => {
  try {
    await service.deleteAssignment(req.params.id);
    return res.status(200).json({ mensaje: "Eliminado correctamente" });
  } catch (error) {
    return res.status(estado(error)).json({ error: error.message });
  }
};
