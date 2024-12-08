import express from "express";
import * as fs from "fs";
import { filterFamilies } from "./modules/handleFiltering.js";

const app = express();
const port = 8080;

let families;
fs.readFile("api/data/families.json", function (err, data) {
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
  res.send(filterFamilies(req.query, families));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
