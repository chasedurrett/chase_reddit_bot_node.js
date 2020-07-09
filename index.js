require("dotenv").config();
const { CLIENT_ID, CLIENT_SECRET, REDDIT_USER, REDDIT_PASS } = process.env;
const { CommentStream } = require("snoostorm");
const Snoowrap = require("snoowrap");
const Snoostorm = require("snoostorm");

const r = new Snoowrap({
  userAgent:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:78.0) Gecko/20100101 Firefox/78.0",
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  username: REDDIT_USER,
  password: REDDIT_PASS,
});

const stream = new Snoostorm.CommentStream(r, {
  subreddit: "instantkarma",
  results: 25,
});

stream.on("item", (comment) => {
  switch (comment.body) {
    case "jimmy":
      comment.reply("Jimmy, I miss you");
      break;
    case "F":
      comment.reply("F");
      break;
  }
});
