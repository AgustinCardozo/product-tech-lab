import { Router } from "express";
import { createProduct, deleteProduct, getAllProducts, getProductById } from "../controllers/product.controller.js";

const router = Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/create", createProduct);
// router.put("/:id", (req, res) => {
//   res.json({ message: `Actualizar el producto con ID ${req.params.id}` });
// });
router.delete("/:id", deleteProduct);

export default router;