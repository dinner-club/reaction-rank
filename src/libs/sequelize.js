import Sequelize from "sequelize";

const { DB_ADDRESS, DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;
export default new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_ADDRESS,
  dialect: "postgres",
  port: DB_PORT,
  operatorsAliases: false
});
