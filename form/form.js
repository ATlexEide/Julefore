const form = document.getElementById("create-family-form");
const specifyOtherFoodRadio = document.getElementById("option-other");
const specifyOtherFoodInput = document.getElementById("input-option-other");
const radioMenu = document.getElementById("radio-menu");
radioMenu.addEventListener("click", () => {
  console.log("yipp");
  if (specifyOtherFoodRadio.checked) {
    specifyOtherFoodInput.removeAttribute("hidden");
  } else {
    specifyOtherFoodInput.setAttribute("hidden", "");
  }
});
