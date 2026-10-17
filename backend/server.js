const express = require("express");
const cors = require("cors");
require("dotenv").config();

const conectarDB = require("./config/db");
const productosRoutes = require("./routes/productos");

const app = express();

// Conectar MongoDB
conectarDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.json({
    mensaje: "API de StockFlow funcionando correctamente",
  });
});

// Rutas de productos
app.use("/api/productos", productosRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});