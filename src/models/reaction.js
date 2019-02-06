import Sequelize from "sequelize";
import sequelize from "../libs/sequelize";

export default sequelize.define(
  "reaction",
  {
    user: {
      type: Sequelize.STRING
    },
    item_channel: {
      type: Sequelize.STRING
    },
    // presumably this will always be message, but might as well store it since slack provides it.
    item_type: {
      type: Sequelize.STRING
    },
    item_ts: {
      type: Sequelize.BOOLEAN
    },
    ts: {
      type: Sequelize.STRING
    },
    emoji: {
      type: Sequelize.STRING
    }
  },
  {
    version: true
  }
);
