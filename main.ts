import express from "express";
import * as fs from "node:fs";

const app = express();
const port: number = 3000;

let families: JSON;
fs.readFile("data/families.json", function (err, data) {
  if (err) throw err;
  families = JSON.parse(data.toString());
});

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Server root");
});
app.get("/families", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(families);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
