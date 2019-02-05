import Sequelize from "sequelize";

export { default as Sequelize } from "sequelize";

const { DB_ADDRESS, DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;
export const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_ADDRESS,
  dialect: "postgres",
  port: DB_PORT,
  operatorsAliases: false
});
