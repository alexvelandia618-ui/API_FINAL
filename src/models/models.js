// CAPA MODELS: única capa que toca el sistema de archivos (fs).
import fs from "fs";

// Cada entidad: archivo JSON y nombre de su campo identificador
const entidades = {
  pilots:      { archivo: "./data/pilots.json",      idCampo: "id" },
  airplanes:   { archivo: "./data/airplanes.json",   idCampo: "id" },
  assignments: { archivo: "./data/assignments.json", idCampo: "idAsignacion" },
};

const leer = (entidad) =>
  JSON.parse(fs.readFileSync(entidades[entidad].archivo, "utf-8"));

const guardar = (entidad, datos) =>
  fs.writeFileSync(entidades[entidad].archivo, JSON.stringify(datos, null, 2));

export const obtenerTodos = (entidad) => leer(entidad);

export const obtenerPorId = (entidad, id) => {
  const campo = entidades[entidad].idCampo;
  return leer(entidad).find((x) => x[campo] == id);
};

export const crear = (entidad, objeto) => {
  const campo = entidades[entidad].idCampo;
  const datos = leer(entidad);
  // id autoincremental simple
  objeto[campo] = datos.length > 0 ? datos[datos.length - 1][campo] + 1 : 1;
  datos.push(objeto);
  guardar(entidad, datos);
  return objeto;
};

export const actualizar = (entidad, id, cambios) => {
  const campo = entidades[entidad].idCampo;
  const datos = leer(entidad);
  const i = datos.findIndex((x) => x[campo] == id);
  if (i === -1) return undefined;
  datos[i] = { ...datos[i], ...cambios, [campo]: datos[i][campo] };
  guardar(entidad, datos);
  return datos[i];
};

export const eliminar = (entidad, id) => {
  const campo = entidades[entidad].idCampo;
  const datos = leer(entidad);
  const i = datos.findIndex((x) => x[campo] == id);
  if (i === -1) return undefined;
  const [borrado] = datos.splice(i, 1);
  guardar(entidad, datos);
  return borrado;
};
