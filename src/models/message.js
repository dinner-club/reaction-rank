import Sequelize from "sequelize";
import sequelize from "../libs/sequelize";

export default sequelize.define(
  "message",
  {
    ts: {
      type: Sequelize.STRING
    },
    user: {
      type: Sequelize.STRING
    },
    channel: {
      type: Sequelize.STRING
    },
    text: {
      type: Sequelize.BOOLEAN
    }
  },
  {
    version: true
  }
);
