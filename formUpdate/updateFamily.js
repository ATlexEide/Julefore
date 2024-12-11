async function getFamilies() {
  try {
    const req = await fetch("/api/data/families.json");
    const res = await req.json();
    return res;
  } catch (error) {
    console.log(error);
  }
}
const families = await getFamilies();
console.log(getFamilies());
const FAMILY = families.find((family) => {
  //   return family.id === "2232fac2-cf52-4769-ac24-8b3df38ba560";
  return family.id === "9ecb0a1f-7ff7-4f09-8ace-c73c0f2e1c80";
});
console.log(FAMILY);
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
  console.log("yipp");
  if (specifyOtherFoodRadio.checked) {
    specifyOtherFoodInput.removeAttribute("hidden");
    specifyOtherFoodInput.removeAttribute("disabled");
    specifyOtherFoodInput.setAttribute("required", "");
  } else {
    specifyOtherFoodInput.setAttribute("hidden", "");
    specifyOtherFoodInput.setAttribute("disabled", "");
    petListInput.removeAttribute("required");
  }
});
hasPetInput.addEventListener("click", () => {
  console.log("yipp");
  if (hasPetInput.checked) {
    petListInput.removeAttribute("hidden");
    petListInput.removeAttribute("disabled");
    specifyOtherFoodInput.setAttribute("required", "");
  } else {
    petListInput.setAttribute("hidden", "");
    petListInput.setAttribute("disabled", "");
    petListInput.removeAttribute("required");
  }
});
