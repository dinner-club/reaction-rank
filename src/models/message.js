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
    channel_type: {
      type: Sequelize.STRING
    },
    text: {
      type: Sequelize.STRING(4000)
    },
    type: {
      type: Sequelize.STRING
    },
    subtype: {
      type: Sequelize.STRING
    },
    hidden: {
      type: Sequelize.BOOLEAN
    },
    deleted_ts: {
      type: Sequelize.STRING
    },
    event_ts: {
      type: Sequelize.STRING
    },
    is_starred: {
      type: Sequelize.BOOLEAN
    },
    purpose: {
      type: Sequelize.STRING
    },
    client_msg_id: {
      type: Sequelize.STRING
    },
    topic: {
      type: Sequelize.STRING
    },
    thread_ts: {
      type: Sequelize.STRING
    },
    reply_count: {
      type: Sequelize.STRING
    },
    reply_users_count: {
      type: Sequelize.STRING
    },
    latest_reply: {
      type: Sequelize.STRING
    },
    parent_user_id: {
      type: Sequelize.STRING
    },
    inviter: {
      type: Sequelize.STRING
    },
    bot_id: {
      type: Sequelize.STRING
    },
    old_name: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    },
    upload: {
      type: Sequelize.BOOLEAN
    },
    display_as_body: {
      type: Sequelize.BOOLEAN
    },
    upload_reply_to: {
      type: Sequelize.STRING
    },
    username: {
      type: Sequelize.STRING
    },
    bot_link: {
      type: Sequelize.STRING
    }
  },
  {
    version: true
  }
);
