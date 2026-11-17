// CAPA SERVICES: reglas de negocio. No conoce req ni res.
import { obtenerTodos, obtenerPorId, crear, actualizar, eliminar } from "../models/models.js";

const fallo = (mensaje, status = 400) => Object.assign(new Error(mensaje), { status });

const validar = (p) => {
  if (!p.nombre || !p.licencia) throw fallo("nombre y licencia son obligatorios");
  if (typeof p.horasVuelo !== "number" || p.horasVuelo < 0)
    throw fallo("horasVuelo debe ser un número mayor o igual a 0");
  if (!p.estado) throw fallo("estado es obligatorio");
};

export const registerPilot = (datos) => {
  validar(datos);
  const repetida = obtenerTodos("pilots").find((p) => p.licencia === datos.licencia);
  if (repetida) throw fallo("Ya existe un piloto con esa licencia");
  return crear("pilots", datos);
};

export const listPilots = () => obtenerTodos("pilots");

export const getPilot = (id) => {
  const piloto = obtenerPorId("pilots", id);
  if (!piloto) throw fallo("Piloto no encontrado", 404);
  return piloto;
};

export const updatePilot = (id, datos) => {
  getPilot(id); // lanza 404 si no existe
  validar(datos);
  return actualizar("pilots", id, datos);
};

export const deletePilot = (id) => {
  getPilot(id);
  const asignado = obtenerTodos("assignments").some((a) => a.idPiloto == id);
  if (asignado) throw fallo("No se puede eliminar: el piloto tiene asignaciones");
  return eliminar("pilots", id);
};
