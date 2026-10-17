const express = require("express");
const router = express.Router();

const Producto = require("../models/Productuto");

// GET - Obtener todos los productos
router.get("/", async (req, res) => {
  try {
    const productos = await Producto.find();

    res.json(productos);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al obtener los productos",
      error: error.message,
    });
  }
});

// POST - Crear un producto
router.post("/", async (req, res) => {
  try {
    const { nombre, categoria, precio, stock } = req.body;

    const nuevoProducto = new Producto({
      nombre,
      categoria,
      precio,
      stock,
    });

    const productoGuardado = await nuevoProducto.save();

    res.status(201).json(productoGuardado);
  } catch (error) {
    res.status(400).json({
      mensaje: "Error al crear el producto",
      error: error.message,
    });
  }
});

module.exports = router;
