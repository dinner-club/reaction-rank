import Sequelize from "sequelize";
import sequelize from "../libs/sequelize";

export default sequelize.define(
  "emoji",
  {
    emoji: {
      type: Sequelize.STRING,
      unique: true,
      primaryKey: true
    },
    // either a url or the name of another (alias) emoji
    value: {
      type: Sequelize.STRING
    }
  },
  {
    version: true
  }
);
