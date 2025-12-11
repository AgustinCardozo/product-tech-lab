import * as service from "../services/product.service.js";

export const getAllProducts = async (req, res) => {
  const products = await service.getAllProducts();
  res.json(products);
};


export const getProductById = async (req, res) => {
  const { id } = req.params;

  const product = await service.getProductById(id);

  if (!product) {
    res.status(404).json({ error: "No existe el producto" });
  }

  res.json(product);
};