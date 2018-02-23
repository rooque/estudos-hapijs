import { User } from "../model/user.model";
import bcrypt from "bcrypt";
import { omit, map as _map } from "lodash";

const removePassKey = user => omit(user.dataValues, "pass");

export const createUser = async (request, h) => {
  const { email, pass, name } = request.payload;
  try {
    const hashPass = await bcrypt.hash(pass, 12);
    const newUser = await User.create({
      email,
      pass: hashPass,
      name
    });
    return removePassKey(newUser);
  } catch (error) {
    console.error(error);
    const resErr = h.response(
      error.errors ? _map(error.errors, err => omit(err, "instance")) : error
    );
    resErr.code(400);
    return resErr;
  }
};

export const findAllUser = async (request, h) => {
  try {
    const allUsers = await User.findAll({ attributes : { exclude : ["pass"] } });
    return allUsers;
  } catch (error) {
    console.error(error);
    const resErr = h.response();
    resErr.code(400);
    return resErr;
  }
};
