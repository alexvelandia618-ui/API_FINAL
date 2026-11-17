import { obtenerTodos, obtenerPorId, crear, actualizar, eliminar } from "../models/models.js";

const fallo = (mensaje, status = 400) => Object.assign(new Error(mensaje), { status });

const validar = (a) => {
  if (!a.modelo || !a.matricula || !a.fabricante)
    throw fallo("modelo, matricula y fabricante son obligatorios");
  if (typeof a.capacidadMaxima !== "number" || a.capacidadMaxima <= 0)
    throw fallo("capacidadMaxima debe ser un número mayor a 0");
};

export const registerAirplane = (datos) => {
  validar(datos);
  const repetida = obtenerTodos("airplanes").find((a) => a.matricula === datos.matricula);
  if (repetida) throw fallo("Ya existe un avión con esa matrícula");
  return crear("airplanes", datos);
};

export const listAirplanes = () => obtenerTodos("airplanes");

export const getAirplane = (id) => {
  const avion = obtenerPorId("airplanes", id);
  if (!avion) throw fallo("Avión no encontrado", 404);
  return avion;
};

export const updateAirplane = (id, datos) => {
  getAirplane(id);
  validar(datos);
  return actualizar("airplanes", id, datos);
};

export const deleteAirplane = (id) => {
  getAirplane(id);
  const asignado = obtenerTodos("assignments").some((a) => a.idAvion == id);
  if (asignado) throw fallo("No se puede eliminar: el avión tiene asignaciones");
  return eliminar("airplanes", id);
};
