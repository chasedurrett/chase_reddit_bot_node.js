require("dotenv").config();
const {
  CLIENT_ID,
  CLIENT_SECRET,
  REDDIT_USER,
  REDDIT_PASS,
  USER_AGENT,
} = process.env;
const { CommentStream } = require("snoostorm");
const Snoowrap = require("snoowrap");
const Snoostorm = require("snoostorm");

const r = new Snoowrap({
  userAgent: USER_AGENT,
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  username: REDDIT_USER,
  password: REDDIT_PASS,
});

const stream = new CommentStream(r, {
  subreddit: "Cozysounds",
  results: 25,
});

stream.on("item", (comment) => {
  switch (comment.body) {
    case "jimmy":
      comment.reply("Jimmy, I miss you");
      break;
    case "press F":
      comment.reply("F");
      break;
    case "bruh":
      comment.reply("jimmy");
      break;
    case "james":
      comment.reply("jimmy");
      break;    
  }
});
