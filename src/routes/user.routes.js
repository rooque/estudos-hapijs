import { findAllUser, createUser } from "../controller/user.controller";
import Joi from "joi";

const postUserConfig = {
  handler: createUser,
  validate: {
    payload: {
      name: Joi.string()
        .min(1)
        .required(),
      email: Joi.string()
        .min(1)
        .required(),
      pass: Joi.string()
        .min(1)
        .required()
    }
  }
};

export default server => {
  server.route({
    method: "GET",
    path: "/users",
    handler: findAllUser
  });

  server.route({
    method: "POST",
    path: "/users",
    config: postUserConfig
  });
};
