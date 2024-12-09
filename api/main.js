import express from "express";
import * as fs from "fs";
import { filterFamilies } from "./modules/handleFilterRequest.js";
import { updateFamily } from "./modules/handlePutRequest.js";
import { deleteFamily } from "./modules/handleDeleteRequest.js";
import { createFamily } from "./modules/handlePostRequest.js";

const app = express();
const port = 8080;

let families;
function fetchData() {
  fs.readFile("api/data/families.json", function (err, data) {
    if (err) throw err;
    families = JSON.parse(data.toString());
  });
}
function updateData() {
  fs.writeFile("api/data/families.json", JSON.stringify(families), () => {
    fetchData();
    console.log("Data updated");
    console.log(families);
  });
}

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
// Update families
app.put("/families/:familyId/edit", (req, res) => {
  console.log(req.params);
  updateFamily(req, families);
  res.send(`Edited family ${req.params.familyId}`);
  updateData();
  console.log(families);
});
app.delete("/families/:familyId/delete", (req, res) => {
  deleteFamily(req, families);
  updateData();
  console.log(families);
  res.send(`Deleted family ${req.params.familyId}`);
});
app.post("/families/create", (req, res) => {
  createFamily(req, families);
  updateData();
  console.log(families);
  res.send(`Created family`);
});

app.listen(port, () => {
  fetchData();
  console.log(`Server is running on port ${port}`);
});
