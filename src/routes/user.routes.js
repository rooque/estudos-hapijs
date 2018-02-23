import { findAllUser, createUser } from "../controller/user.controller";
import Joi from "joi";

const postUserConfig = {
  handler: createUser,
  validate: {
    payload: {
      name: Joi.string().min(1).required(),
      email: Joi.string().min(1).required(),
      pass: Joi.string().min(1).required()
    }
  },
  description: 'Create user',
  notes: 'Return created user',
  tags: ['api']
};

const getUserConfig = {
  handler: findAllUser,
  description: 'List all users',
  tags: ['api']
};

export default server => {
  server.route({
    method: "GET",
    path: "/users",
    config: getUserConfig
  });

  server.route({
    method: "POST",
    path: "/users",
    config: postUserConfig
  });
};
