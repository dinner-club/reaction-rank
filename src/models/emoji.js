import Sequelize from "sequelize";
import sequelize from "../libs/sequelize";

export default sequelize.define(
  "emoji",
  {
    name: {
      type: Sequelize.STRING,
      unique: true,
      primaryKey: true
    },
    url: {
      type: Sequelize.STRING
    },
    alias: {
      type: Sequelize.STRING
    }
  },
  {
    version: true
  }
);
