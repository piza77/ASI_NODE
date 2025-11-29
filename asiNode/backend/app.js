const express = require("express");
const cors = require("cors");
const sequelize = require("./database");

const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/users", userRoutes);

// Conexión y sync con MySQL
sequelize
  .authenticate()
  .then(() => console.log("Conectado a MySQL"))
  .catch(err => console.error("Error de conexión", err));

app.listen(8081, () => {
  console.log("Backend Node corriendo en puerto 8081");
});