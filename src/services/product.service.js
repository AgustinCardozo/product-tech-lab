import * as model from "../models/product.model.js";

export const getAllProducts = () => {
  return model.getAllProducts();
};

export const getProductById = (id) => {
  return model.getProductById(id);
};

export const createProduct = (product) => {
  return model.createProduct(product);
}

export const deleteProduct = (id) => {
  return model.deleteProduct(id);
}