import Sequelize from "sequelize";
import serverless from "serverless-http";
import express from "express";

const app = express();

try {
  const {
    DB_ADDRESS,
    DB_PORT,
    DB_NAME,
    DB_USERNAME,
    DB_PASSWORD
  } = process.env;

  const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_ADDRESS,
    dialect: "postgres",
    port: DB_PORT,
    operatorsAliases: false
  });

  app.get("/", async (req, res) => {
    await sequelize
      .authenticate()
      .then(() => {
        res.send("Connection has been established successfully.");
      })
      .catch(err => {
        res.send(`Unable to connect to the database:${err}`);
      });
  });
} catch (e) {
  console.log(e);
}

export const handler = serverless(app);
