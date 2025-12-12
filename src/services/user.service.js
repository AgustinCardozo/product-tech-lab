import * as model from "../models/user.model.js";

export const create = ( username, passwordHash) => {
  return model.create(username, passwordHash);
};

export const findByEmail = (email) => {
  return model.findByEmail(email);
};