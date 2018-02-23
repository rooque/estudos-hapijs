import Sequelize from "sequelize";

export const sequelize = new Sequelize("db", null, null, {
  dialect: "sqlite",
  storage: "./db.sqlite"
});
