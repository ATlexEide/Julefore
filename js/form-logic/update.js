async function getFamilies() {
  try {
    const req = await fetch("/api/data/families.json");
    const res = await req.json();
    return res;
  } catch (error) {
    throw new Error(error);
  }
}
const families = await getFamilies();
const FAMILY = families.find((family) => {
  return family.id === "2232fac2-cf52-4769-ac24-8b3df38ba560";
  // return family.id === "9ecb0a1f-7ff7-4f09-8ace-c73c0f2e1c80";
});
const form = document.getElementById("update-family-form");
const titleInput = document.getElementById("family-name");
titleInput.value = FAMILY.title;
const residentsInput = document.getElementById("residents");
residentsInput.value = FAMILY.preferences.residents;
const descriptionInput = document.getElementById("description");
descriptionInput.value = FAMILY.description;
switch (FAMILY.preferences.food) {
  case "pinnekjøtt":
    document.getElementById("option-pinnekjøtt").checked = true;
    break;
  case "ribbe":
    document.getElementById("option-ribbe").checked = true;
    break;
  default:
    document.getElementById("option-other").checked = true;
    document.getElementById("input-option-other").value =
      FAMILY.preferences.food;
    document.getElementById("input-option-other").removeAttribute("hidden");
    break;
}

let hasPetInput = document.getElementById("option-pets");
const petListInput = document.getElementById("input-option-pets");
const alcoholInput = FAMILY.preferences.alcohol
  ? (document.getElementById("option-alcohol").checked = true)
  : null;
const allergyFriendlyInput = FAMILY.preferences["allergy_friendly"]
  ? (document.getElementById("option-allergy-friendly").checked = true)
  : null;
if (FAMILY.preferences.pets.hasPets) {
  hasPetInput.checked = true;
  petListInput.removeAttribute("hidden");
  petListInput.value = FAMILY.preferences.pets.species;
}

const radioMenu = document.getElementById("radio-menu");
const specifyOtherFoodInput = document.getElementById("input-option-other");
const specifyOtherFoodRadio = document.getElementById("option-other");

radioMenu.addEventListener("click", () => {
  if (specifyOtherFoodRadio.checked) {
    specifyOtherFoodInput.removeAttribute("hidden");
    specifyOtherFoodInput.removeAttribute("disabled");
    specifyOtherFoodInput.setAttribute("required", "");
  } else {
    specifyOtherFoodInput.setAttribute("hidden", "");
    specifyOtherFoodInput.setAttribute("disabled", "");
    specifyOtherFoodInput.removeAttribute("required");
  }
});
hasPetInput.addEventListener("click", () => {
  if (hasPetInput.checked) {
    petListInput.removeAttribute("hidden");
    petListInput.removeAttribute("disabled");
    petListInput.setAttribute("required", "");
  } else {
    petListInput.setAttribute("hidden", "");
    petListInput.setAttribute("disabled", "");
    petListInput.removeAttribute("required");
  }
});

const inputs = document.querySelectorAll("input");
const textarea = document.getElementById("description");

const body = {};
textarea.addEventListener("input", (e) => {
  body.description = textarea.value;
});
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (input.id) {
      case "family-name":
        body.title = input.value;
        break;
      case "residents":
        body.residents = input.value;
        break;
      case "option-pinnekjøtt":
        body.food = input.value;
        break;
      case "option-ribbe":
        body.food = input.value;
        break;
      case "input-option-other":
        body.food = specifyOtherFoodInput.value;
        break;
      case "option-alcohol":
        body.alcohol = input.checked ? true : false;
        break;
      case "option-allergy-friendly":
        body["allergy_friendly"] = input.checked ? true : false;
        break;
      case "option-pets":
        body.hasPets = input.checked ? true : false;
        break;
      case "input-option-pets":
        body.species = input.value;
        break;
      case "option-gifts":
        body.gifts = input.checked ? true : false;
        break;

      default:
        break;
    }
  });
});
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  sendPutReq(FAMILY, body);
});
async function sendPutReq(family, body) {
  try {
    const json = JSON.stringify(body);
    const req = await fetch(
      `http://localhost:8080/families/${FAMILY.id}/edit`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: json,
      }
    );
    const res = await req.json();
  } catch (error) {
    throw new Error(error);
  }
}
