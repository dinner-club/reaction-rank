import serverless from "serverless-http";
import express from "express";
import bodyParser from "body-parser";
import User from "./src/models/user";
import Message from "./src/models/message";

const app = express();
app.use(bodyParser.json({ strict: false }));

try {
  app.post("/", async (req, res) => {
    const { team_id: teamId, event, challenge, type: requestType } = req.body;
    if (teamId === process.env.SLACK_TEAM_ID) {
      if (requestType === "url_verification") {
        res.send(challenge);
      } else if (event) {
        const { type: eventType, user, channel, text, ts } = event;
        if (["team_join", "user_change"].includes(eventType)) {
          await User.create({
            ...user,
            ...user.profile
          });
          res.sendStatus(200);
        } else if (eventType === "message") {
          await Message.create({
            user,
            channel,
            text,
            ts
          });
        }
      }
    }
  });
} catch (e) {
  console.log(e);
}

export const handler = serverless(app);
