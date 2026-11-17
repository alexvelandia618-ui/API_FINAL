// Punto de entrada: middlewares, rutas y servidor.
import express from "express";
import pilotRoutes from "./routes/pilotRoutes.js";
import airplaneRoutes from "./routes/airplaneRoutes.js";
import assignmentRoutes from "./routes/assignmentRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/pilots", pilotRoutes);
app.use("/api/airplanes", airplaneRoutes);
app.use("/api/assignments", assignmentRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
