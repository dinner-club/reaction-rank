import serverless from "serverless-http";
import express from "express";
import bodyParser from "body-parser";
import User from "./src/models/user";
import Message from "./src/models/message";
import Reaction from "./src/models/reaction";
import Emoji from "./src/models/emoji";

const app = express();
app.use(bodyParser.json({ strict: false }));

try {
  app.post("/", async (req, res) => {
    const { team_id: teamId, event, challenge, type: requestType } = req.body;
    if (teamId === process.env.SLACK_TEAM_ID) {
      if (requestType === "url_verification") {
        res.send(challenge);
      } else if (event) {
        const {
          type: eventType,
          user,
          channel,
          channel_type: channelType,
          text,
          ts,
          subtype,
          name,
          value,
          event_ts: eventTS,
          reaction,
          item_user: itemUser,
          item
        } = event;
        if (["team_join", "user_change"].includes(eventType)) {
          await User.upsert({
            ...user,
            ...user.profile
          });
        } else if (eventType === "message") {
          await Message.create({
            user,
            channel,
            channel_type: channelType,
            text,
            ts
          });
        } else if (eventType === "emoji_changed") {
          if (subtype === "add") {
            const emoji = { name };
            if (value.startsWith("http")) {
              emoji.url = value;
            } else {
              emoji.alias = value;
            }
            await Emoji.upsert(emoji);
          }
        } else if (eventType === "reaction_added") {
          await Reaction.create({
            user,
            name: reaction,
            item_user: itemUser,
            item_type: item.type,
            item_channel: item.channel,
            item_ts: item.ts,
            ts: eventTS
          });
        } else if (eventType === "reaction_removed") {
          const reactionInstance = await Reaction.findOne({
            where: {
              user,
              name: reaction,
              item_user: itemUser,
              item_type: item.type,
              item_channel: item.channel,
              item_ts: item.ts
            }
          });
          reactionInstance.deleted = true;
          await reactionInstance.save();
        }
      }
    }
    res.sendStatus(200);
  });
} catch (e) {
  console.log(e);
}

export const handler = serverless(app);
