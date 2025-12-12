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

export const createProduct = async (req, res) => {
  const productData = req.body;
  const newProduct = await service.createProduct(productData);
  res.status(201).json(newProduct);
}

export const deleteProduct = async (req, res) => {
  const productId = req.params.id;

  const wasDeleted = await service.deleteProduct(productId);

  if (!wasDeleted) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  res.status(204).send();
};
