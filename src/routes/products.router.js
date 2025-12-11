import { Router } from "express";
import { createProduct, getAllProducts, getProductById } from "../controllers/product.controller.js";

const router = Router();

router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);
router.post("/products", createProduct);
router.put("/products/:id", (req, res) => {
  res.json({ message: `Actualizar el producto con ID ${req.params.id}` });
});
router.delete("/products/:id", (req, res) => {
  res.json({ message: `Eliminar el producto con ID ${req.params.id}` });
});

export default router;