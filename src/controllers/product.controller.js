import * as productService from "../services/product.service.js";

export const getAll = async (req, res) => {
  const products = await productService.getAll();
  res.json(products);
};

export const getById = async (req, res) => {
  const { id } = req.params;

  const product = await productService.getById(id);

  if (!product) {
    res.status(404).json({ error: `No existe el producto con id ${id}` });
  }

  res.json(product);
};

export const create = async (req, res) => {
  const productData = req.body;
  const newProduct = await productService.create(productData);
  res.status(201).json(newProduct);
}

export const remove = async (req, res) => {
  const productId = req.params.id;

  const wasDeleted = await productService.remove(productId);

  if (!wasDeleted) {
    return res.status(404).json({ error: `Producto con id ${productId} no encontrado` });
  }

  res.status(204).send();
};
