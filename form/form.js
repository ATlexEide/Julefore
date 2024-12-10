const form = document.getElementById("create-family-form");
const specifyOtherFoodRadio = document.getElementById("option-other");
const specifyOtherFoodInput = document.getElementById("input-option-other");
const radioMenu = document.getElementById("radio-menu");
const hasPetInput = document.getElementById("option-pets");
const petListInput = document.getElementById("input-option-pets");
radioMenu.addEventListener("click", () => {
  console.log("yipp");
  if (specifyOtherFoodRadio.checked) {
    specifyOtherFoodInput.removeAttribute("hidden");
    specifyOtherFoodInput.removeAttribute("disabled");
  } else {
    specifyOtherFoodInput.setAttribute("hidden", "");
    specifyOtherFoodInput.setAttribute("disabled", "");
  }
});
hasPetInput.addEventListener("click", () => {
  console.log("yipp");
  if (hasPetInput.checked) {
    petListInput.removeAttribute("hidden");
    petListInput.removeAttribute("disabled");
  } else {
    petListInput.setAttribute("hidden", "");
    petListInput.setAttribute("disabled", "");
  }
});
