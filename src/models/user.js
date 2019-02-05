export default (sequelize, DataTypes) => {
  return sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.STRING,
        unique: true,
        primaryKey: true
      },
      team_id: {
        type: DataTypes.STRING
      },
      name: {
        type: DataTypes.STRING,
        defaultValue: ""
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      color: {
        type: DataTypes.STRING
      },
      real_name: {
        type: DataTypes.STRING
      },
      tz: {
        type: DataTypes.STRING,
        defaultValue: "America/Los_Angeles"
      },
      tz_label: {
        type: DataTypes.STRING,
        defaultValue: "Pacific Standard Time"
      },
      tz_offset: {
        type: DataTypes.INTEGER,
        defaultValue: -28800
      },
      title: {
        type: DataTypes.STRING,
        defaultValue: ""
      },
      phone: {
        type: DataTypes.STRING,
        defaultValue: ""
      },
      skype: {
        type: DataTypes.STRING,
        defaultValue: ""
      },
      real_name_normalized: {
        type: DataTypes.STRING
      },
      display_name: {
        type: DataTypes.STRING
      },
      display_name_normalized: {
        type: DataTypes.STRING
      },
      status_text: {
        type: DataTypes.STRING,
        defaultValue: ""
      },
      status_emoji: {
        type: DataTypes.STRING,
        defaultValue: ""
      },
      status_expiration: {
        type: DataTypes.INTEGER
      },
      avatar_hash: {
        type: DataTypes.STRING
      },
      always_active: {
        type: DataTypes.BOOLEAN
      },
      first_name: {
        type: DataTypes.STRING
      },
      last_name: {
        type: DataTypes.STRING
      },
      image_24: {
        type: DataTypes.STRING
      },
      image_32: {
        type: DataTypes.STRING
      },
      image_48: {
        type: DataTypes.STRING
      },
      image_72: {
        type: DataTypes.STRING
      },
      image_192: {
        type: DataTypes.STRING
      },
      image_512: {
        type: DataTypes.STRING
      },
      status_text_canonical: {
        type: DataTypes.STRING,
        defaultValue: ""
      },
      team: {
        type: DataTypes.STRING
      },
      is_admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      is_owner: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      is_primary_owner: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      is_restricted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      is_ultra_restricted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      is_bot: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      is_app_user: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      updated: {
        type: DataTypes.INTEGER
      }
    },
    {
      version: true
    }
  );
};
