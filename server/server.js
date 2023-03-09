const express = require("express");
const cors = require("cors");
const app = express();

const port = 5000;

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());

const DB = [];

app.post("/todo/insert", (req, res) => {
  const { date, content } = req.body;
  const dates = date.split("-");
  DB.push({
    year: Number(dates[0]),
    month: Number(dates[1]),
    date: Number(dates[2]),
    content: content,
  });
  res.send(DB);
});

app.listen(port, function () {
  console.log("on server");
});
