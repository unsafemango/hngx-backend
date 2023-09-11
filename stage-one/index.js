// import and initialize express
const express = require("express");
const app = express();

const PORT = 5000;

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Initialize built-in middleware for urlencoding and json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api", (req, res) => {
  const { slack_name, track } = req.query;
  const utc = new Date(
    new Date().getTime() + new Date().getTimezoneOffset() * 60000
  );
  const utc_time = utc.toISOString().split(".")[0] + "Z";

  res.status(200).json({
    slack_name: slack_name,
    current_day: days[now.getDay()],
    utc_time: utc_time,
    track: track,
    github_file_url:
      "https://github.com/unsafemango/hngx-backend/blob/main/stage-one/app.js",
    github_repo_url:
      "https://github.com/unsafemango/hngx-backend/tree/main/stage-one",
    status_code: res.statusCode,
  });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
