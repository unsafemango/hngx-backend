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

  res.json({
    slack_name: slack_name,
    currentDay: days[now.getDay()],
    utc_time: now.toISOString(),
    track: track,
    github_file_url: "https://www.google.com",
    github_repo_url: slack_name,
    status_code: 200,
  });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
