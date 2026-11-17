// CAPA CONTROLLERS: lee req, llama al servicio y responde con el código HTTP.
import * as service from "../services/airplaneService.js";

const estado = (error) => error.status || 400;

export const createAirplane = async (req, res) => {
  try {
    const nuevo = await service.registerAirplane(req.body);
    return res.status(201).json(nuevo);
  } catch (error) {
    return res.status(estado(error)).json({ error: error.message });
  }
};

export const getAllAirplanes = async (req, res) => {
  try {
    return res.status(200).json(await service.listAirplanes());
  } catch (error) {
    return res.status(estado(error)).json({ error: error.message });
  }
};

export const getByIdAirplane = async (req, res) => {
  try {
    return res.status(200).json(await service.getAirplane(req.params.id));
  } catch (error) {
    return res.status(estado(error)).json({ error: error.message });
  }
};

export const updateAirplane = async (req, res) => {
  try {
    return res.status(200).json(await service.updateAirplane(req.params.id, req.body));
  } catch (error) {
    return res.status(estado(error)).json({ error: error.message });
  }
};

export const deleteAirplane = async (req, res) => {
  try {
    await service.deleteAirplane(req.params.id);
    return res.status(200).json({ mensaje: "Eliminado correctamente" });
  } catch (error) {
    return res.status(estado(error)).json({ error: error.message });
  }
};
