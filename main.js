import express from "express";
import * as fs from "node:fs";
import { getFamilyHandler } from "./js/getHandlers.js";

const app = express();
const port = 8080;

let families;
fs.readFile("data/families.json", function (err, data) {
  if (err) throw err;
  families = JSON.parse(data.toString());
});

app.use(express.json());
app.get("/", (req, res) => {
  console.log(req);
  res.send("Server root");
});
app.get("/families", (req, res) => {
  res.send(families);
});
app.get("/families/filter/preferences", (req, res) => {
  const filteredFamilies = getFamilyHandler(req, families);
  res.send(filteredFamilies);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
