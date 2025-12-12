import * as model from "../models/product.model.js";

export const getAll = () => {
  return model.getAll();
};

export const getById = (id) => {
  return model.getById(id);
};

export const create = (product) => {
  return model.create(product);
}

export const remove = (id) => {
  return model.remove(id);
}