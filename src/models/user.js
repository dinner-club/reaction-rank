import Sequelize from "sequelize";
import sequelize from "../libs/sequelize";

export default sequelize.define(
  "user",
  {
    id: {
      type: Sequelize.STRING,
      unique: true,
      primaryKey: true
    },
    team_id: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING,
      defaultValue: ""
    },
    deleted: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    color: {
      type: Sequelize.STRING
    },
    real_name: {
      type: Sequelize.STRING
    },
    tz: {
      type: Sequelize.STRING,
      defaultValue: "America/Los_Angeles"
    },
    tz_label: {
      type: Sequelize.STRING,
      defaultValue: "Pacific Standard Time"
    },
    tz_offset: {
      type: Sequelize.INTEGER,
      defaultValue: -28800
    },
    title: {
      type: Sequelize.STRING,
      defaultValue: ""
    },
    phone: {
      type: Sequelize.STRING,
      defaultValue: ""
    },
    skype: {
      type: Sequelize.STRING,
      defaultValue: ""
    },
    real_name_normalized: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    display_name: {
      type: Sequelize.STRING
    },
    display_name_normalized: {
      type: Sequelize.STRING
    },
    status_text: {
      type: Sequelize.STRING,
      defaultValue: ""
    },
    status_emoji: {
      type: Sequelize.STRING,
      defaultValue: ""
    },
    status_expiration: {
      type: Sequelize.INTEGER
    },
    avatar_hash: {
      type: Sequelize.STRING
    },
    always_active: {
      type: Sequelize.BOOLEAN
    },
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    image_24: {
      type: Sequelize.STRING
    },
    image_32: {
      type: Sequelize.STRING
    },
    image_48: {
      type: Sequelize.STRING
    },
    image_72: {
      type: Sequelize.STRING
    },
    image_192: {
      type: Sequelize.STRING
    },
    image_512: {
      type: Sequelize.STRING
    },
    status_text_canonical: {
      type: Sequelize.STRING,
      defaultValue: ""
    },
    team: {
      type: Sequelize.STRING
    },
    is_admin: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    is_owner: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    is_primary_owner: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    is_restricted: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    is_ultra_restricted: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    is_bot: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    is_app_user: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    updated: {
      type: Sequelize.INTEGER
    }
  },
  {
    version: true
  }
);
