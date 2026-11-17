// CAPA CONTROLLERS: lee req, llama al servicio y responde con el código HTTP.
import * as service from "../services/pilotService.js";

const estado = (error) => error.status || 400;

export const createPilot = async (req, res) => {
  try {
    const nuevo = await service.registerPilot(req.body);
    return res.status(201).json(nuevo);
  } catch (error) {
    return res.status(estado(error)).json({ error: error.message });
  }
};

export const getAllPilots = async (req, res) => {
  try {
    return res.status(200).json(await service.listPilots());
  } catch (error) {
    return res.status(estado(error)).json({ error: error.message });
  }
};

export const getByIdPilot = async (req, res) => {
  try {
    return res.status(200).json(await service.getPilot(req.params.id));
  } catch (error) {
    return res.status(estado(error)).json({ error: error.message });
  }
};

export const updatePilot = async (req, res) => {
  try {
    return res.status(200).json(await service.updatePilot(req.params.id, req.body));
  } catch (error) {
    return res.status(estado(error)).json({ error: error.message });
  }
};

export const deletePilot = async (req, res) => {
  try {
    await service.deletePilot(req.params.id);
    return res.status(200).json({ mensaje: "Eliminado correctamente" });
  } catch (error) {
    return res.status(estado(error)).json({ error: error.message });
  }
};
