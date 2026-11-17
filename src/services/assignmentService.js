import { obtenerTodos, obtenerPorId, crear, actualizar, eliminar } from "../models/models.js";

const fallo = (mensaje, status = 400) => Object.assign(new Error(mensaje), { status });

// VALIDACIÓN RELACIONAL: el piloto y el avión deben existir
const validar = (a) => {
  if (!a.idPiloto || !a.idAvion || !a.fechaVuelo || !a.rutaAsignada)
    throw fallo("idPiloto, idAvion, fechaVuelo y rutaAsignada son obligatorios");
  if (!obtenerPorId("pilots", a.idPiloto)) throw fallo("El piloto no existe", 404);
  if (!obtenerPorId("airplanes", a.idAvion)) throw fallo("El avión no existe", 404);
};

export const registerAssignment = (datos) => {
  validar(datos);
  return crear("assignments", datos);
};

export const listAssignments = () => obtenerTodos("assignments");

export const getAssignment = (id) => {
  const asignacion = obtenerPorId("assignments", id);
  if (!asignacion) throw fallo("Asignación no encontrada", 404);
  return asignacion;
};

export const updateAssignment = (id, datos) => {
  getAssignment(id);
  validar(datos);
  return actualizar("assignments", id, datos);
};

export const deleteAssignment = (id) => {
  getAssignment(id);
  return eliminar("assignments", id);
};
