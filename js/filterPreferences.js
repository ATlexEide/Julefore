import { displayFamilies, fetchFamilies } from "./displayFamilies.js";
const inputs = document.getElementsByTagName("input");
const applyBtn = document.getElementById("apply-filter-btn");
const removeBtn = document.getElementById("remove-filter-btn");

const slider = document.getElementById("residents");
const outputResidents = document.getElementById("residents-out");
outputResidents.textContent = slider.value;
slider.oninput = () => {
  outputResidents.textContent = slider.value;
};

let filter = "";
let families = await fetchFamilies();
displayFamilies(families);

applyBtn.addEventListener("click", async () => {
  console.log("click");
  filter = "";
  for (const input of inputs) {
    if (input.type === "range") filter += `&${input.name}=${input.value}`;
    if (input.checked) filter += `&${input.name}=${input.value}`;
  }
  console.log("filter length: ", filter.length);
  if (!filter.length) {
    return;
  } else {
    let filteredFamilies = await updateFamilies(filter);
    displayFamilies(filteredFamilies);
  }
});
removeBtn.addEventListener("click", () => {
  displayFamilies(families);
  filter = "";
  for (const input of inputs) {
    if (input.checked) input.checked = false;
  }
});
async function updateFamilies(filter) {
  return await sendGetFilterReq(filter);
}
async function sendGetFilterReq(filter) {
  filter = filter.split("").splice(filter.indexOf("&"));
  filter.shift();
  filter = filter.join("");
  console.log("Filter: ", filter);
  try {
    const req = await fetch(
      `http://localhost:8080/families/filter/preferences?${filter}`
    );
    const res = await req.json();
    console.log(res);
    return res;
  } catch (error) {}
}

const cards = document.getElementsByClassName("family-card");
const dialog = document.getElementById("family-dialog");
for (const card of cards) {
  card.addEventListener("click", () => {
    console.log("yay");
    dialog.showModal();
  });
}
